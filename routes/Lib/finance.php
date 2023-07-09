<?php

use App\Http\Controllers\FinanceController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware([
     'auth:sanctum',
     config('jetstream.auth_session'),
     'verified',
])->group(function () {

    Route::get('/Finance', function () {

        $data = (new FinanceController)->FinanceAccount();

        return Inertia::render('Shared/Finance',[
            'finance' => $data
        ]);

    })->name('Finance');

    Route::post('/addCredits', [FinanceController::class,'makeDeposit'])->name('makeDeposit');

    Route::post('/withdrawCredits', [FinanceController::class,'makeWithdrawal'])->name('makeWithdrawal');
});
