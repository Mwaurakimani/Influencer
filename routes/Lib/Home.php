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

Route::get('/AboutUs', function () {
    return Inertia::render('AboutUs', [
    ]);
})->name('AboutUs');

Route::get('/ContactUs', function () {
    return Inertia::render('ContactUs', [
    ]);
})->name('ContactUs');

Route::get('/AllProjects', function () {
    return Inertia::render('Projects', [
    ]);
})->name('AllProjects');

Route::get('/ViewProject', function () {
    return Inertia::render('ViewProject', [
    ]);
})->name('ViewProject');

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