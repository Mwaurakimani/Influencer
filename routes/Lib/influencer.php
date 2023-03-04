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

    $user = null;
    $Influencer = null;

    DB::beginTransaction();

    try {

        $user = User::create([
            'first_name' => $request['first_name'],
            'last_name' => $request['last_name'],
            'email' => $request['email'],
            'password' => bcrypt($request['password']),
        ]);

        $influencer = $user->influencer()->create([
            "price" => "0",
            "unit" => "per Hour",
        ]);

        DB::commit();
    } catch (Exception $e) {
        DB::rollBack();
    }

    return $user->influencer;
});

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
        }else{
            return abort(404,"User not Found");
        }
    });

    Route::get('/viewAllInfluencerAccounts', function () {
        return "success";
    });

    Route::get('/randomizeInfluencerAccounts', function () {
        return "success";
    });

    Route::post('/updateInfluencer/{id}', function (Request $request, $id) {
        $user = User::find($id);

        DB::beginTransaction();

        try {

            $user->update([
                'first_name' => $request['first_name'],
                'last_name' => $request['last_name'],
                'email' => $request['email'],
            ]);

            $user->influencer->update([
                "price" => $request['influencer']['price'],
                "unit" => $request['influencer']['unit'],
            ]);

            if(count($request['social']) > 0){
                foreach($request['social'] as $key => $social_account){
                    $input_platform = $social_account['platform'];
                    $platform_id = null;

                    $platforms = Platform::all();

                    foreach($platforms as $key => $platform){
                        if($platform->name == $input_platform){
                            $platform_id = $platform->id;
                        }
                    }

                    if($platform_id != null){
                        if(count($user->influencer->accounts()->where('platform_id',$platform_id)->get()) > 0){
                            $account = $user->influencer->accounts()->where('platform_id',$platform_id)->first();

                            $account->username = $social_account['username'];
                            $account->following = $social_account['following'];

                            $account->save();
                        }else{
                            $user->influencer->accounts()->create([
                                'platform_id' => $platform_id,
                                'username' => $social_account['username'],
                                'following' => $social_account['following']
                            ]);
                        }
                    }else{
                        return "No platform with that name found";
                    }
                }
            }

            DB::commit();
        } catch (Exception $e) {
            return [$e];
            DB::rollBack();
        }

        return $user;
    });

    Route::get('/updatePassword/{id}', function () {
        return "success";
    });

    Route::get('/ListMyProjects/{user}', [InfluencerController::class,'getActiveProjects']);

    // Route::post('/user/{user}',function(Request $request,))
});
