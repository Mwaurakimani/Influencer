<?php

use App\Http\Controllers\InfluencerController;
use App\Http\Requests\CreateInfleuncerRequest;
use Illuminate\Support\Facades\Route;

Route::post('/CreateInfluencerValidate',function (CreateInfleuncerRequest $request){
    return [
        'status' =>true
    ];
})->name('createInfluencerValidate');


Route::middleware([
     'auth:sanctum',
     config('jetstream.auth_session'),
     'verified',
])->group(function () {

    Route::post('/updateInfluencer', [InfluencerController::class,'update'])->name('updateInfluencer');

    Route::get('/ListMyProjects', [InfluencerController::class, 'getActiveProjects'])->name('ListActiveInfluencerProjects');

    Route::post('/removeAccount/{id}/{account}', [InfluencerController::class, 'removeAccount'])->name('removeAccount');

});

