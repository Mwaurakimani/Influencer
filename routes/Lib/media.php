<?php

use App\Http\Controllers\MediaController;
use Illuminate\Support\Facades\Route;

Route::middleware([
     'auth:sanctum',
     config('jetstream.auth_session'),
     'verified',
])->group(function () {

    Route::delete('/deleteMedia',[MediaController::class,'DeleteMedia'])->name('DeleteMedia');

});
