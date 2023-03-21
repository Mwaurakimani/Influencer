<?php

use App\Http\Controllers\InfluencerController;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Influencer;
use App\Models\Platform;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;

//no auth needed
Route::post('/createInfluencer', function (Request $request) {


    DB::beginTransaction();

    try {

        $user = User::create([
            'first_name' => $request['first_name'],
            'last_name' => $request['last_name'],
            'email' => $request['email'],
            'phone' => $request['phone'],
            'password' => bcrypt($request['password']),
        ]);

        $influencer = $user->influencer()->create([
            "price" => "0",
            "unit" => "per Hour",
        ]);

        DB::commit();
    } catch (Exception $e) {
        DB::rollBack();
        dd($e);
    }

    return [
        'status' => true
    ];
})->name('createInfluencer');

//required

Route::middleware([
    // 'auth:sanctum',
    // config('jetstream.auth_session'),
    // 'verified',
])->group(function () {

    Route::get('/viewInfluencer/{id}', function (Request $request, $id) {
        $user = User::find($id);

        if ($user && $user->influencer) {
            $user->influencer = $user->influencer;

            return $user;
        } else {
            return abort(404, "User not Found");
        }
    });

    Route::get('/viewAllInfluencerAccounts', function () {
        return "success";
    });

    Route::get('/randomizeInfluencerAccounts', function () {
        return "success";
    });

    Route::post('/updateInfluencer', [InfluencerController::class,'update'])->name('updateInfluencer');

    Route::get('/updatePassword/{id}', function () {
        return "success";
    });

    Route::get('/ListMyProjects', [InfluencerController::class, 'getActiveProjects'])->name('ListActiveInfluencerProjects');

    // Route::post('/user/{user}',function(Request $request,))
});

