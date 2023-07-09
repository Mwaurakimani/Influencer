<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('getMarketerDetails/{id}', [\App\Http\Controllers\MarketersController::class,'getMarketerDetails'])->name('getMarketerDetails');

Route::post('mainPageDatasetAction', [\App\Http\Controllers\MarketersController::class,'mainPageDatasetAction'])->name('mainPageDatasetAction');

Route::post('/test',[\App\Http\Controllers\DatabaseTesterController::class,'execute']);

Route::get('/setUpDB',function (){
//    $feedback = \Illuminate\Support\Facades\Artisan::call('db:seed --class=UsersSeeder');
    $feedback = \Illuminate\Support\Facades\Artisan::call('db:seed');

    dd($feedback);
});
