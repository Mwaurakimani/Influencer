<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {

    Route::get('/Admin/Deposits', function () {

        $deposits = (new \App\Http\Controllers\FinanceController)->listAllDeposits();

        return Inertia::render('Portal/Finance/Deposits',[
            'deposits' => $deposits
        ]);
    })->name('AdminListDeposits');

    Route::get('/Admin/Deposits/{id}', function ($id) {

        $deposit = (new \App\Http\Controllers\FinanceController)->viewDeposit($id);

        if($deposit == null){
            return \Illuminate\Support\Facades\Redirect::back();
        }else{
            return Inertia::render('Portal/Finance/ViewDeposits',[
                'deposit' => $deposit
            ]);
        }
    })->name('AdminViewDeposits');



    Route::get('/Admin/Withdraws', function () {

        $Withdraws = (new \App\Http\Controllers\FinanceController)->listAllWithdraws();

        return Inertia::render('Portal/Finance/Withdrawals',[
            'Withdraws' => $Withdraws
        ]);
    })->name('AdminListWithdraws');

    Route::get('/Admin/Withdraws/{id}', function ($id) {

        $Withdraw = (new \App\Http\Controllers\FinanceController)->viewWithdraw($id);

        if($Withdraw == null){
            return \Illuminate\Support\Facades\Redirect::back();
        }else{
            return Inertia::render('Portal/Finance/ViewWithdrawals',[
                'withdraw' => $Withdraw
            ]);
        }
    })->name('AdminViewWithdrawal');


    Route::post('/Admin/Transaction/update/{id}/{type}', function (Request $request, $id,$type) {

        return (new \App\Http\Controllers\FinanceController)->updateTransaction($request,$id,$type);

    })->name('AdminUpdateTransaction');



});

