<?php

use App\Http\Controllers\AssignmentController;
use Illuminate\Support\Facades\Route;

Route::middleware([
     'auth:sanctum',
     config('jetstream.auth_session'),
     'verified',
])->group(function () {

    Route::post('/SendMessage',[AssignmentController::class,'sendMessage'])->name('sendMessage');

    Route::post('/MMarkAsComplete',[AssignmentController::class,'MarketerMarkAsComplete'])->name('MarketerMarkAsComplete');

    Route::post('/IMarkAsComplete',[AssignmentController::class,'InfluencerMarkAsComplete'])->name('InfluencerMarkAsComplete');

    Route::post("/rateInfluencer/{Project}",[AssignmentController::class,'RateInfluencer'])->name('rateInfluencer');

    Route::post("/rateMarketer/{Project}",[AssignmentController::class,'RateMarketer'])->name('rateMarketer');

});
