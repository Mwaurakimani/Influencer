<?php

namespace App\Http\Controllers;

use App\Models\SocialAccount;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function createUser(Request $request)
    {
        //TODO:Validation is required

        DB::beginTransaction();

        try {

            $user = User::create([
                'first_name' => $request['first_name'],
                'last_name' => $request['last_name'],
                'email' => $request['email'],
                'gender' => $request['email'],
                'DOB' => $request['email'],
                'phone' => $request['phone'],
                'designation' => $request['designation'],
                'password' => bcrypt($request['password']),
            ]);

            DB::commit();
        } catch (Exception $e) {
            DB::rollBack();

            throw new Exception($e->getMessage());
        }

        return 'Account has been created successfully';
    }

    public function updateUser(Request $request, User $user)
    {
        //TODO:Validation is required

        DB::beginTransaction();

        try {

            $user->first_name = $request['first_name'];
            $user->last_name = $request['last_name'];
            $user->email = $request['email'];
            $user->phone = $request['phone'];
            $user->designation = $request['designation'];

            DB::commit();
        } catch (Exception $e) {
            DB::rollBack();

            throw new Exception($e->getMessage());
        }

        return 'Account has been created successfully';
    }

    public function AdminViewUser($id)
    {
        $user = User::where('id', $id)->with('influencer', 'marketer')->first();

        if ($user == null) {
            return abort(404, "User not found");
        }


        if ($user->influencer != null) {
            $user['social_account'] = SocialAccount::with('platform')->with('influencerClass')->where('influencer_id', $user['influencer']['id'])->get();
        }

        return $user;
    }

    public function updateSocialAccountStatus(Request $request, $id): string
    {
        $social_account = SocialAccount::find($id);
        $social_account->status = $request['status'];
        $social_account->save();

        return "Updated social account status";
    }

    public function updatePassword(Request $request, $id)
    {
        $this->validate($request, [
            'currentPassword' => 'required',
            'newPassword' => 'required',
            'confirmPassword' => 'required'
        ]);

        //check that the current passwords match

        $user = User::find($id);

        if($user == null){
            return abort(404,"User not found");
        }

        $user_password = $user->password;

        if(!Hash::check($request['currentPassword'],$user_password)){
            return redirect()->back()->withErrors([
                'currentPassword' => 'Invalid password'
            ]);
        }

        //confirm that the new pass words match
        if ($request['newPassword'] != $request['confirmPassword']){
            return redirect()->back()->withErrors([
                'confirmPassword' => 'Password do not match',
            ]);
        }

        //encrypt the new password
        $user->password = bcrypt($request['newPassword']);


        //save the new password
        $user->save();

        return redirect()->back()->with([
            'message' => 'Password was updated successfully'
        ]);

    }
}
