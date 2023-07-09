<?php

use App\Models\Project;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/Projects', function () {
    $get_projects = function () {
        $projects = Project::with('projectRequirements')->paginate(20);

        return $projects;

    };

    $projects = $get_projects();

    return Inertia::render('Projects', [
        'projects' => $projects
    ]);
})->name('Projects');

Route::get('/AboutUs', function () {
    return Inertia::render('AboutUs', [
    ]);
})->name('AboutUs');

Route::get('/ContactUs', function () {
    return Inertia::render('ContactUs', [
    ]);
})->name('ContactUs');

Route::get('/viewProject', function () {
    return Inertia::render('Home/ViewProject', [
    ]);
})->name('viewProjectProto');




