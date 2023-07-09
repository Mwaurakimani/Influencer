<?php

namespace App\Http\Controllers;

use App\Models\Bid;
use App\Models\InfluencerClass;
use App\Models\Platform;
use App\Models\ProjectRequirements;
use App\Models\SocialAccount;
use ErrorException;
use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class BidController extends Controller
{
    /**
     * @throws ErrorException
     */
    public function makeBid(Request $request, Project $project)
    {
        $user = Auth::user();

        if ($request['amount'] == null) {
            return response('Amount not entered', 400);
        }

        if ($user && $user->influencer) {
            $bid = null;


            if ($user->influencer->bids()->where('project_id', $project->id)->first() != null) {
                return [
                    'status' => false,
                    'message' => "Bid already made"
                ];
            } else {
                DB::beginTransaction();

                try {
                    if ($user->marketer) {
                        throw new ErrorException('Error found');
                    }

                    $can_bid = $this->canBid($user, $project);

                    if (!$can_bid['status']) {
                        throw new Exception($can_bid['message']);
                    }

                    $bid = $user->influencer->bids()->create([
                        'project_id' => $project->id,
                        'bid_amount' => $request['amount'],
                        'description' => $request['comment'],
                    ]);

                    DB::commit();

                } catch (Exception $e) {
                    DB::rollback();
                    return abort(403, $e->getMessage());
                }

                return [
                    'status' => true,
                    'bid' => $bid
                ];
            }
        }
    }

    public function canBid($user, $project)
    {
        $account_verification_required = false;
        $project_requirement = [];

        if ($project['platformRequirements'] != null) {
            foreach ($project['platformRequirements'] as $key => $requirement) {
                $influencerClass = InfluencerClass::find($requirement['influencer_classes_id']);

                array_push($project_requirement,
                    [
                        "platform_id" => $influencerClass['platform_id'],
                        "min_count" => $influencerClass['min_count'],
                        "max_count" => $influencerClass['max_count'],
                    ]
                );
            }
        }

        $influencer = $user->influencer;

        if ($account_verification_required) {
            $influencer_account_influencer_ids = $influencer->socialAccount()->where('status', 'verified')->pluck('influencer_class_id')->toArray();
        }else{
            $influencer_account_influencer_ids = $influencer->socialAccount()->pluck('influencer_class_id')->toArray();
        }

        if ($influencer_account_influencer_ids) {
            $influencer_class_details = DB::table('PlatformInfluencerView')->whereIn('influencer_class_id', $influencer_account_influencer_ids)->get();

            $result = array_filter($project_requirement, function ($requirement) use ($influencer_class_details) {
                foreach ($influencer_class_details as $influencerClass) {

                    if ($requirement['platform_id'] === $influencerClass->platform_id && $influencerClass->min_count >= $requirement['min_count']) {
                        return true;
                    }

                }

                return false;
            });

            $result = array_values($result);

            if (count($project_requirement) == count($result)) {
                return [
                    'status' => true
                ];
            } else {
                return [
                    'status' => false,
                    'message' => "You do not meet the minimum requirements to bid on this project.s"
                ];
            }
        } else {
            return [
                'status' => false,
                'message' => "You do not meet the minimum requirements to bid on this project.s"
            ];
        }
    }


}
