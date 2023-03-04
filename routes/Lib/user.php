<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//no auth needed

Route::get('/SignUpAs', function () {
    return Inertia::render('Shared/SignUpAs', [
    ]);
})->name('SignUpAs');


Route::get('/SignUpAsInfluencer', function () {
    return Inertia::render('Influencer/CreateInfluencer', [
    ]);
})->name('SignUpAsInfluencer');


Route::get('/SignUpAsEmployer', function () {
    return Inertia::render('Employer/CreateEmployer', [
    ]);
})->name('SignUpAsEmployer');

Route::get('/login', function () {
    return Inertia::render('Auth/Login');
})->name('login');

Route::post('/login', function () {
    return "loging in";
    // return redirect()->route('Account');
})->name('LogInAccount');

Route::post('/logout', function () {
    return "loging in";
    // return redirect()->route('Account');
})->name('LogInAccount');


//required
Route::middleware([
    // 'auth:sanctum',
    // config('jetstream.auth_session'),
    // 'verified',
])->group(function () {

    Route::get('/Account/{id}', function () {
        $account = 'Marketer';
    
        if($account == 'Influencer'){
            return Inertia::render('Influencer/Account', [
            ]);
        }else if($account == 'Marketer'){
            return Inertia::render('Employer/Account', [
            ]);
        }
    
    })->name('Account');

    Route::get('/MyProjects/{id}', function () {
        $account = 'Marketer';
    
        if($account == 'Influencer'){
            return Inertia::render('Influencer/MyProjects', [
            ]);
        }else if($account == 'Marketer'){
            return Inertia::render('Employer/MyProjects', [
            ]);
        }
    
    })->name('MyProjects');

});
