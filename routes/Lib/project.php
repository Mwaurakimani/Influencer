<?php

use App\Http\Controllers\BidController;
use App\Http\Controllers\ProjectsController;
use App\Models\Influencer;
use App\Models\InfluencerClass;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Database\Eloquent\Relations\Pivot;
use App\Models\Project;

//no auth needed
Route::get('/AllProjects', function () {
    return Inertia::render('Projects', []);
})->name('AllProjects');

Route::get('/ViewProject', function () {
    return Inertia::render('ViewProject', []);
})->name('ViewProject');

//required
Route::middleware([
//     'auth:sanctum',
//     config('jetstream.auth_session'),
//     'verified',
])->group(function () {

    Route::get('/PostProject', function () {
        return Inertia::render('Employer/PostAdvert');
    })->name('createProject');

    Route::post('/createProject', [ProjectsController::class, 'createProject'])->name('PostProject');

    Route::get('/AllProjects', function () {

        $projects = Project::with('platforms','bids')->get();
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
            $modified_projects->push($modified_project);
        });

        return Inertia::render('Projects',[
            'projects' => $modified_projects
        ]);

    })->name('AllProjects');

    Route::get('/ListOwnedProjects', function (Request $request) {
        $user = User::find(Auth::user()->id);

        if ($user) {
            $marketer = $user->marketer;
            if ($marketer) {

                $projects = $marketer->projects()->with('platforms','bids')->get();
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
                    $modified_projects->push($modified_project);
                });

                return Inertia::render('Employer/MyProjects',[
                    'projects' => $modified_projects
                ]);
            }
        }
    })->name('ListOwnedProjects');

    Route::get('/ViewOwnedProject/{id}', function (Request $request,$id) {
        $user = User::find(Auth::user()->id);

        if ($user) {
            $marketer = $user->marketer;
            if ($marketer) {

                $projects = $marketer->projects()->where('id', $id)->with('platforms','bids')->get();
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
                                        with('platform','influencerClass')
                                    ->where('influencer_id',$bid->influencer_id)
                                    ->get();
                            }
                        });
                    }
                    $modified_projects->push($modified_project);
                });

                return Inertia::render('Employer/ViewProject',[
                    'project' => $modified_projects
                ]);
            }
        }
    })->name('ViewOwnedProject');

    Route::get('/ViewProject/{id}', function (Request $request, $id) {
        $projects = Project::where('id', $id)->with('platforms','bids')->get();
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
                        with('platform','influencerClass')
                            ->where('influencer_id',$bid->influencer_id)
                            ->get();
                    }
                });
            }


            $modified_projects->push($modified_project);
        });

        return Inertia::render('ViewProject',[
            'project' =>$modified_projects
        ]);
    })->name('ViewProject');

    Route::get('/influencerListViableProjects/{id}', function () {
        return "success";
    });

    Route::post('/bid/project/{project}', [BidController::class,'makeBid'])->name('MakeBid');

    Route::get('/randomizeProjects', function () {
        return "success";
    });

    Route::post('/fileUpload', [ProjectsController::class,'fileUpload'])->name('uploadFile');
});
