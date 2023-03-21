<?php

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//no auth needed

Route::get('/SignUpAs', function () {
    return Inertia::render('Shared/SignUpAs', [
    ]);
})->middleware('guest')->name('SignUpAs');


Route::get('/SignUpAsInfluencer', function () {
    return Inertia::render('Influencer/CreateInfluencer', [
    ]);
})
    ->middleware('guest')
    ->name('SignUpAsInfluencer');


Route::get('/SignUpAsEmployer', function () {
    return Inertia::render('Employer/CreateEmployer', [
    ]);
})
    ->middleware('guest')
    ->name('SignUpAsEmployer');

Route::get('/login', function () {
    return Inertia::render('Auth/Login');
})->middleware('guest')->name('login');

Route::post('/testIfLoggedIn',function (){
    if(Auth::check()){
        return true;
    }else{
        return false;
    }

})->name('routeIsLoggedIn');

//required
Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {

    Route::get('/Account', function (Request $request) {
        $user = Auth::user();

        if ($user->influencer) {
            $user = ( new \App\Http\Controllers\InfluencerController)->getUserDetails($request, $user);

            return Inertia::render('Influencer/Account', [
                'user' => $user
            ]);
        } else if ($user->marketer) {
            $user = $user;
            $marketer = $user->marketer;
            $company = $user->marketer->company;

            return Inertia::render('Employer/Account', [
                'user' => $user,
                'marketer' => $marketer,
                'company' => $company,
            ]);
        }

    })->name('Account');

    Route::get('/MyProjects', function () {
        $user = Auth::user();

        if ($user->influencer) {
            return redirect()->route('ListActiveInfluencerProjects');
        } else if ($user->marketer) {
            return redirect()->route('ListOwnedProjects');
        }

    })->name('MyProjects');

});
