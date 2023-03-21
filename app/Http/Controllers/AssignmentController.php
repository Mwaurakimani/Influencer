<?php

namespace App\Http\Controllers;

use App\Models\Assignment;
use App\Models\Bid;
use App\Models\Chat;
use App\Models\Influencer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AssignmentController extends Controller
{
    public function sendMessage(Request $request)
    {
        $bid_id = $request['project']['bids'][0]['id'];

        if(empty($request['message'])){
            return [
                'status'=>false,
                'message' => 'No message found'
            ];
        }

        $assignment = Assignment::where('bid_id',$bid_id)->first();

        $chat = new Chat();

        $chat->assignment_id = $assignment->id;
        $chat->sender_id = Auth::user()->id;
        $chat->receiver_id = ((function ($user) use ($assignment){
            if($user->influencer != null){
                //its influencer
                dd("sender id influencer");
            }else if ($user->marketer != null){
                //its marketer
                //get the user who got the assignment
                $bid = Bid::find($assignment->bid_id);
                $influencer_id = Influencer::find($bid->influencer_id);

                return $influencer_id->user_id;
            }
        })(Auth::user()));
        $chat->message = $request['message'];
        $chat->save();


        return [
            'status'=>true,
            'message' => 'Sent'
        ];

    }
}
