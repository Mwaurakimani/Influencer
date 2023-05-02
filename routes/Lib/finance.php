<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//no auth needed


//required
Route::middleware([
     'auth:sanctum',
     config('jetstream.auth_session'),
     'verified',
])->group(function () {

    Route::get('/Finance', function () {
        if(!Auth::check()) {
            return \Illuminate\Support\Facades\Redirect::to('/');
        }

        $data = (new \App\Http\Controllers\FinanceController)->FinanceAccount();

        return Inertia::render('Shared/Finance',[
            'finance' => $data
        ]);
    })->name('Finance');

    Route::get('/approveTransaction/{id}', function () {
        return "success";
    });

    Route::get('/changeTransactionStatus/{id}', function () {
        return "success";
    });


    Route::post('/addCredits', [\App\Http\Controllers\FinanceController::class,'makeDeposit'])->name('makeDeposit');

    Route::post('/withdrawCredits', [\App\Http\Controllers\FinanceController::class,'makeWithdrawal'])->name('makeWithdrawal');
});
