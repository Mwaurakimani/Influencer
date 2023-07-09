<?php

use App\Http\Controllers\InfluencerController;
use App\Http\Controllers\MarketersController;
use App\Http\Controllers\ProjectsController;
use App\Models\Assignment;
use App\Models\Bid;
use App\Models\Influencer;
use App\Models\Marketer;
use App\Models\SocialAccount;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Project;

Route::get('/ViewProject/{id}', function (Request $request, $id) {

    $project = Project::where('id', $id)->with('bids','projectRequirements')->first();

    //confirm if project was found
    if ($project == null) {
        return redirect()->to('/');
    }

    foreach ($project->bids as $bid) {
        if ($bid->influencer_id) {
            $influencer_id = $bid->influencer_id;
            $influencer = Influencer::find($influencer_id);
            $user = User::find($influencer->user_id);
            $user->load('influencer');
            $user->influencer = $influencer;
            $bid['user'] = $user;
            $social_accounts = SocialAccount::with( 'influencerClass')
                ->where('influencer_id', $bid->influencer_id)
                ->get();
            $bid['user']['social_accounts'] = $social_accounts;
        }
    }

    $marketer = (Marketer::find($project->marketer_id));
    $marketer['user'] = $marketer->user;
    $project['marketer'] = $marketer;


    if (Auth::check()) {
        $is_bidder = count($project['bids']->filter(function ($value, $key) {
                if (Auth::user() && Auth::user()->influencer && Auth::user()->influencer->id == $value->influencer_id) {
                    return $value;
                }
            })) > 0;

        if ($is_bidder) {
            $assigned = Project::where('id', $id)->first();
            $assigned = count(Assignment::where('bid_id', Bid::where('project_id', $assigned->id)->where('influencer_id', Auth::user()->influencer->id)->first()->id)->get()) > 0;

            return Inertia::render('ViewProject', [
                'project' => $project,
                'assigned' => $assigned
            ]);
        } else {
            return Inertia::render('ViewProject', [
                'project' => $project,
                'assigned' => []
            ]);
        }
    } else {
        return Inertia::render('ViewProject', [
            'project' => $project
        ]);
    }

})->name('ViewProject');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {


    Route::get('/PostProject', function () {
        return Inertia::render('Employer/PostAdvert');
    })->name('createProject');

    Route::post('/createProject', [ProjectsController::class, 'createProject'])->name('PostProject');

    Route::get('/ListOwnedProjects', function (Request $request) {
        $user = User::find(Auth::user()->id);

        if ($user && $user->marketer) {

            $projects = $user->marketer->projects()->with('projectRequirements')->get();

            return Inertia::render('Employer/MyProjects', [
                'projects' => $projects
            ]);
        }
    })->name('ListOwnedProjects');

    Route::get('/ViewOwnedProject/{id}', [MarketersController::class, 'ViewProject'])->name('ViewOwnedProject');

    Route::get('/ViewBidProject/{id}', [InfluencerController::class, 'ViewProject'])->name('ViewBidProject');

    Route::post('/fileUpload', [ProjectsController::class, 'fileUpload'])->name('uploadFile');

    Route::post('/validateBudget', [ProjectsController::class, 'validateBudget'])->name('validateBudget');


});
