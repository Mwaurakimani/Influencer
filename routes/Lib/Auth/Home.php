<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/Account', function () {
    $account = 'Marketer';

    if($account == 'Influencer'){
        return Inertia::render('Influencer/Account', [
        ]);
    }else if($account == 'Marketer'){
        return Inertia::render('Employer/Account', [
        ]);
    }

})->name('Account');


Route::get('/Finance', function () {
    $account = 'Marketer';

    if($account == 'Influencer'){
        return Inertia::render('Influencer/Finance', [
        ]);
    }else if($account == 'Marketer'){
        return Inertia::render('Employer/Finance', [
        ]);
    }

})->name('Finance');

Route::get('/MyProjects', function () {
    $account = 'Marketer';

    if($account == 'Influencer'){
        return Inertia::render('Influencer/MyProjects', [
        ]);
    }else if($account == 'Marketer'){
        return Inertia::render('Employer/MyProjects', [
        ]);
    }

})->name('MyProjects');















Route::get('/Projects', function () {
    return Inertia::render('Projects', [
    ]);
})->name('Projects');

Route::get('/PostProject', function () {
    return Inertia::render('Projects', [
    ]);
})->name('PostProject');