<?php

namespace App\Http\Controllers;

use App\Models\Bid;
use App\Models\InfluencerClass;
use App\Models\Platform;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Project;

class MarketersController extends Controller
{
    public function hireInfluencer(Request $request,User $influencer,Project $project,User $marketer) {
        
        
        
        $authorize = $this->confirmProjectOwner($marketer,$project);
        $bidExist = $this->confirmBid($influencer,$project);
        $influencerAllowed = $this->confirmInfluencerClass($influencer,$project);

        echo $influencerAllowed;

        return;


        if(!$authorize){
            echo "Marketer does not own the project";
        }

        if(!$bidExist){
            echo "Influencer has not bid for this project";
        }

        if(!$influencerAllowed){
            echo "The influencer does not meet the minimum qualifications for this project";
        }




        return [$influencer,$project,$marketer];
    }

    public function confirmProjectOwner($marketer,$project){
        return $project->marketer_id == $marketer->marketer->id;
    }
    
    public function confirmBid($influencer,$project){
        $bids = Bid::where('influencer_id',$influencer->influencer->id)
        ->where('project_id',$project->id)->get();
        
        return count($bids) > 0;
    }
    
    public function confirmInfluencerClass($influencer,$project){
        $influencer = $influencer->influencer->accounts;
        $platforms =  Platform::all();


        $requirements = $project->projectRequirements;

        foreach($requirements as $key => $requirement){
            $require_min_count = InfluencerClass::find($requirement->influencer_classes_id)->min_count;
            $require_max_count = InfluencerClass::find($requirement->influencer_classes_id)->min_count;

            return $influencer;
        }

    }
}
