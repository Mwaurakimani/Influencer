<?php

use App\Http\Controllers\MarketersController;
use Illuminate\Support\Facades\Route;

Route::middleware([
     'auth:sanctum',
     config('jetstream.auth_session'),
     'verified',
])->group(function () {

    Route::post('/HireInfluencer/{id}', [MarketersController::class,'hireInfluencer'])->name('AcceptBid');

});
