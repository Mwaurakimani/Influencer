<?php

namespace App\Http\Controllers;

use App\Models\Assignment;
use App\Models\Bid;
use App\Models\Chat;
use App\Models\Influencer;
use App\Models\InfluencerClass;
use App\Models\Marketer;
use App\Models\Media;
use App\Models\Platform;
use Exception;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Project;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use function PHPUnit\Framework\returnArgument;

class MarketersController extends Controller
{
    public function hireInfluencer(Request $request)
    {
        $marketer = User::find(Auth::user()->id);
        $influencer = User::find($request['influencer_id']);
        $bid = Bid::find($request['bid_id']);


        $project = Project::find($bid->project_id);

        $authorize = $this->confirmProjectOwner($marketer, $project);
        $bidExist = $this->confirmBid($influencer, $project);
        $influencerAllowed = $this->confirmInfluencerClass($influencer, $project);
        $assigned = $this->assigned($bid);

        if (!$authorize) {
            return "Marketer does not own the project";
        }

        if (!$bidExist) {
            return "Influencer has not bid for this project";
        }

        if (!$influencerAllowed) {
            return "The influencer does not meet the minimum qualifications for this project";
        }

        if ($assigned) {
            return 'Project is already assigned';
        }

        DB::beginTransaction();

        //create
        try {
            $bid->status = 'assigned';

            $bid->save();

            $user = Assignment::create([
                'bid_id' => $bid->id,
                'agreed_price' => $bid->bid_amount,
                'marketer_status' => "Assigned",
                'influencer_status' => "Accepted",
                'general_status' => "Incomplete",
            ]);

            DB::commit();
        } catch (Exception $e) {
            DB::rollBack();
            dd($e);
        }

        return [
            'status' => true,
            'message' => 'created'
        ];
    }

    public function confirmProjectOwner($marketer, $project)
    {
        return $project->marketer_id == $marketer->marketer->id;
    }

    public function confirmBid($influencer, $project)
    {
        $bids = Bid::where('influencer_id', $influencer->influencer->id)
            ->where('project_id', $project->id)->get();

        return count($bids) > 0;
    }

    public function confirmInfluencerClass($influencer, $project)
    {
        $influencer = $influencer->influencer->accounts;
        $platforms = Platform::all();


        $requirements = $project->projectRequirements;

        foreach ($requirements as $key => $requirement) {
            $require_min_count = InfluencerClass::find($requirement->influencer_classes_id)->min_count;
            $require_max_count = InfluencerClass::find($requirement->influencer_classes_id)->min_count;

            return $influencer;
        }

    }

    public function assigned($bid)
    {
        $project = Project::find($bid->project_id);

        $bids = Bid::where('project_id', $project->id)->where('status', 'LIKE', 'assigned')->get();

        if (count($bids) > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function openWorkspace($id)
    {
        $user = User::find(Auth::user()->id);

        if ($user) {
            $marketer = $user->marketer;
            if ($marketer) {

                $projects = $marketer->projects()->where('id', $id)->with('platforms', 'bids')->get();
                $modified_projects = collect();

                $projects->each(function ($project) use ($modified_projects) {
                    $modified_project = $project;
                    if ($project->platforms) {
                        $modified_project->platforms->each(function ($platform) {
                            if ($platform->pivot) {
                                $influencer_class_id = $platform->pivot->influencer_classes_id;
                                $influencer_class = InfluencerClass::find($influencer_class_id);
                                $platform->pivot['influencer_data'] = $influencer_class;
                            }
                        });
                    }

                    if ($project->bids) {
                        $modified_project->bids->each(function ($bid) use ($project) {
                            if ($bid->influencer_id) {
                                $influencer_id = $bid->influencer_id;
                                $influencer = Influencer::find($influencer_id);
                                $user = User::with('influencer')->find($influencer->user_id);
                                $user->influencer = $influencer;
                                $bid['user'] = $user;
                                $bid['user']['social_accounts'] = \App\Models\SocialAccount::
                                with('platform', 'influencerClass')
                                    ->where('influencer_id', $bid->influencer_id)
                                    ->get();
                            }
                        });
                    }
                    $modified_projects->push($modified_project);
                });

                $temp_media  = Bid::where('project_id',10)->get()->transform(function ($item) {
                    $assignment = Assignment::where('bid_id',$item->id)->get();

                    if(count($assignment) > 0){
                        $data = $assignment->transform(function ($item,$key){
                            return Media::where('assignment_id',$item->id)->get();
                        });

                        return $data;
                    }else{
                        return null;
                    }
                });

                $media = $temp_media->flatten()->filter();

                $chats = ((function() use ($projects){

                    $data = Bid::where('project_id',10)->get()->transform(function ($item) {
                        $assignment = Assignment::where('bid_id',$item->id)->get();

                        return $assignment;
                    });

                    $assignment = $data->flatten()[0];

                    $chats =Chat::where('assignment_id',$assignment->id)->get();

                    return $chats;

                })());


                return Inertia::render('Employer/WorkingSpace', [
                    'project' => $modified_projects,
                    'media' => $media,
                    'chats' => $chats
                ]);
            }
        }
    }
}
