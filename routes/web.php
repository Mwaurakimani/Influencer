<?php

use App\Models\InfluencerClass;
use App\Models\Project;
use Barryvdh\Debugbar\Facades\Debugbar;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
     return Inertia::render('Welcome', [
         'canRegister' => Route::has('register'),
         'laravelVersion' => Application::VERSION,
         'phpVersion' => PHP_VERSION,
     ]);
 })->name('Home');

Route::middleware([
     'auth:sanctum',
     config('jetstream.auth_session'),
     'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        $user = Auth::user();

        $influencer = $user->influencer()->first();
        $marketer = $user->marketer()->first();

        if($influencer !== null) {
            return Inertia::render('Influencer/Dashboard');
        }elseif($marketer !== null) {
            return Inertia::render('Employer/Dashboard');
        }else{
            return Redirect::to('/');
        }

    })->name('dashboard');

    Route::get('/Notifications', function () {
        $user = Auth::user();

        return Inertia::render('Shared/Notifications');

    })->name('Notifications');
});

include 'Lib/assignment.php';
include 'Lib/bid.php';
include 'Lib/finance.php';
include 'Lib/Home.php';
include 'Lib/influencer.php';
include 'Lib/marketer.php';
include 'Lib/media.php';
include 'Lib/project.php';
include 'Lib/user.php';

include 'AdminPortal/index.php';
