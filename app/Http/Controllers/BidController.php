<?php

namespace App\Http\Controllers;

use App\Models\Bid;
use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class BidController extends Controller
{
    /**
     * @throws \ErrorException
     */
    public function makeBid (Request $request, Project $project) {
        $user = Auth::user();

        if($user){
            $bid = null;

            if($user->influencer->bids()->where('project_id',$project->id)->first() != null){
                return [
                    'status' => false,
                    'message' => "Bid already made"
                ];
            }else{
                DB::beginTransaction();

                try{
                    if($user->marketer){
                        throw new \ErrorException('Error found');
                    }


                    $bid = $user->influencer->bids()->create([
                        'project_id' => $project->id,
                        'bid_amount' => $request['amount'],
                        'description' => $request['comment'],
                    ]);

                    DB::commit();

                }catch (Exception $e){
                    DB::rollback();
                    throw new \ErrorException('Error creating bid');
                }

                return [
                    'status' => true,
                    'bid' => $bid
                ];
            }
        }
    }
}
