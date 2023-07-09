<?php

use App\Http\Controllers\BidController;
use Illuminate\Support\Facades\Route;

Route::middleware([
     'auth:sanctum',
     config('jetstream.auth_session'),
     'verified',
])->group(function () {

    Route::post('/bid/project/{project}', [BidController::class, 'makeBid'])->name('MakeBid');

});
