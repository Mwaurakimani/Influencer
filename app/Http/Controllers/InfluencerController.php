<?php

namespace App\Http\Controllers;

use App\Models\Bid;
use App\Models\InfluencerClass;
use App\Models\Platform;
use App\Models\Project;
use Exception;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use function MongoDB\BSON\toJSON;

class InfluencerController extends Controller
{
    public function getActiveProjects(Request $request)
    {
        $user = User::find(Auth::user()->id);

        if ($user) {
            $influencer = $user->influencer;
            if ($influencer) {

//                $influencer = $user->influencer->projects()->with('bids', 'platforms', 'projectRequirements')->first();
                $modified_projects = collect();


                $influencer['projects'] = (function () use ($influencer) {
                    $influencer_id = $influencer->id;
                    $bids = Bid::where('influencer_id', $influencer_id)->get();
                    $projects = [];

                    $bids->map(function ($item, $key) use (&$projects) {
                        $project = Project::with('bids', 'platforms')->where('id',$item->project_id)->first();

                        if ($project->platforms) {
                            $project->platforms = $project->platforms->transform(function ($platform) {
                                if ($platform->pivot) {
                                    $influencer_class_id = $platform->pivot->influencer_classes_id;
                                    $influencer_class = InfluencerClass::find($influencer_class_id);
                                    $platform->pivot['influencer_data'] = $influencer_class;
                                }

                                return $platform;
                            });
                        }
                        array_push($projects,$project);

                    });
                    return $projects;
                })();

                return Inertia::render('Influencer/MyProjects', [
                    'influencer' => $influencer
                ]);
            }
        }
    }

    public function getUserDetails(Request $request, $user)
    {
        $modified_user = collect();
        if ($user) {
            $modified_user = collect($user)->map(function ($item, $key) {
                if ($key == 'influencer') {
                    $social_accounts = [];

                    $item['social_accounts'] = $social_accounts;
                }
                return $item;
            });
        }
        return $modified_user;
    }

    public function update(Request $request)
    {
        $user = User::find(\Illuminate\Support\Facades\Auth::user()->id);
        $userUpdate = $request['user'];
        $influencerUpdate = $request['influencer'];
        $social_accountUpdate = $request['social_accounts'];

        DB::beginTransaction();

        try {

//            $user->update([
//                'first_name' => $request['first_name'],
//                'last_name' => $request['last_name'],
//                'email' => $request['email'],
//            ]);

//            $user->influencer->update([
//                "price" => $request['influencer']['price'],
//                "unit" => $request['influencer']['unit'],
//            ]);

            foreach ($social_accountUpdate as $key => $social_account) {
                $input_platform = $social_account['name'];
                $platform_id = null;

                if (($social_account['username'] == null) || (($social_account['followers']) == null || ($social_account['followers']) == 0)) {
                    continue;
                }

                $platforms = Platform::all();

                foreach ($platforms as $key1 => $platform) {
                    if ($platform->name == $input_platform) {
                        $platform_id = $platform->id;
                    }
                }

                if ($platform_id != null) {
//                    if exist update
                    if (count($user->influencer->accounts()->where('platform_id', $platform_id)->get()) > 0) {
                        $account = $user->influencer->accounts()->where('platform_id', $platform_id)->first();

                        $account->username = $social_account['username'];
                        $account->influencer_class_id = $this->getInfluencerClassID($platform_id, $social_account['followers']);
                        $account->following = $social_account['followers'];

                        $account->save();
                    } //                    else create
                    else {
                        $user->influencer->accounts()->create([
                            'platform_id' => $platform_id,
                            'influencer_class_id' => $this->getInfluencerClassID($platform_id, $social_account['followers']),
                            'username' => $social_account['username'],
                            'following' => $social_account['followers']
                        ]);
                    }
                } else {
                    return 'No platform with that name found';
                }
            }

            DB::commit();
        } catch (Exception $e) {
            DB::rollBack();
            return [$e];
        }

        return 'success';
    }

    public function getInfluencerClassID(mixed $platform_id, mixed $followers)
    {
        if ($followers < 1000000) {
            $influencerClassID = InfluencerClass::where('platform_id', $platform_id)
                ->where('min_count', '<=', $followers)
                ->where('max_count', '>=', $followers)->get();
        } else {
            $influencerClassID = InfluencerClass::where('platform_id', $platform_id)
                ->where('name', 'LIKE', 'Mega-Influencer')
                ->get();
        }

        return ($influencerClassID[0]->id);
    }
}
