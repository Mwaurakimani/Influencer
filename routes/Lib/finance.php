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

    Route::get('/Finance/{id}', function () {
        $account = 'Marketer';
    
        if($account == 'Influencer'){
            return Inertia::render('Influencer/Finance', [
            ]);
        }else if($account == 'Marketer'){
            return Inertia::render('Employer/Finance', [
            ]);
        }
    
    })->name('Finance');

    Route::get('/addCredits/{id}', function () {
        return "success";
    });

    Route::get('/withdrawCredits/{id}', function () {
        return "success";
    });

    Route::get('/approveTransaction/{id}', function () {
        return "success";
    });

    Route::get('/changeTransactionStatus/{id}', function () {
        return "success";
    });

});
