<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//no auth needed

//required
Route::middleware([
    // 'auth:sanctum',
    // config('jetstream.auth_session'),
    // 'verified',
])->group(function () {
    Route::delete('/deleteMedia',[\App\Http\Controllers\MediaController::class,'DeleteMedia'])->name('DeleteMedia');
});
