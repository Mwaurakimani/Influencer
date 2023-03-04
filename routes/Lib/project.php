<?php

use App\Http\Controllers\BidController;
use App\Http\Controllers\ProjectsController;
use App\Models\InfluencerClass;
use Illuminate\Foundation\Application;
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
    // 'auth:sanctum',
    // config('jetstream.auth_session'),
    // 'verified',
])->group(function () {

    Route::get('/PostProject', function () {
        return Inertia::render('Employer/PostAdvert');
    })->name('PostProject');

    Route::post('/createProject/{id}', [ProjectsController::class, 'createProject'])->name('PostProject');

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

        return $modified_projects;

    });

    Route::get('/ListOwnedProjects/{id}', function (Request $request, $id) {
        $user = User::find($id);

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

                return $modified_projects;
            }
        }
    });

    Route::get('/ViewOwnedProjects/{id}/user/{user}', function (Request $request, $id, $user) {
        $user = User::find($user);

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
                    $modified_projects->push($modified_project);
                });

                return $modified_projects;
            }
        }
    });

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
            $modified_projects->push($modified_project);
        });

        return $modified_projects[0];
    });

    Route::get('/influencerListViableProjects/{id}', function () {
        return "success";
    });

    Route::post('/bid/project/{project}/user/{user}', [BidController::class,'makeBid']);

    Route::get('/randomizeProjects', function () {
        return "success";
    });
});
