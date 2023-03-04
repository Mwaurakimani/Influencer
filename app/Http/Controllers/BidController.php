<?php

namespace App\Http\Controllers;

use App\Models\Bid;
use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\DB;

class BidController extends Controller
{
    public function makeBid (Request $request,Project $project,User $user) {

        if($user){
            $bid = null;

            if($user->influencer->bid){
                //TODO:: ask the user to cancel the bid and re-create another
                return;
            }else{
                DB::beginTransaction();

                try{
                    $bid = $user->influencer->bids()->create([
                        'project_id' => $project->id,
                        'bid_amount' => $request['amount'],
                        'description' => $request['description'],
                    ]);
    
                    DB::commit();
    
                }catch (Exception $e){
                    return $e;
    
                    DB::rollback();
                }
    
                return $bid;
            }
        }
    }
}
