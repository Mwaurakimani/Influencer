<?php

namespace App\Http\Controllers;

use App\Models\InfluencerClass;
use App\Models\Platform;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProjectsController extends Controller
{
    public function createProject(Request $request,$id){
        $project = null;
        $user = User::find($id);
        $marketer = $user->marketer;


        DB::beginTransaction();
    
        try {

            $project = $marketer->projects()->create([
                'title' => $request['title'],
                'description' => $request['description'],
                'location' => $request['location'],
                'notes' => $request['notes'],
                'kpi' => $request['kpi'],
                'runtime' => $request['runtime'],
                'metrics' => $request['metric'],
                'position' => $request['position'],
            ]);

            foreach($request['social']['payload'] as $key => $value){
                $platform_id = $this->getPlatformByName($value['name']);
                $influencer_class_id = $this->getInfluencerClassByNameAndPlatformID($platform_id,$value['required_class']);


                $projectRequirements = $project->projectRequirements()->create([
                    'influencer_classes_id' => $influencer_class_id,
                    'platform_id' => $platform_id,
                    'targetValue' => $value['targetValue'],
                    'price' => $value['price'],
                ]);
            }
    
            DB::commit();
        } catch (Exception $e) {
            return $e;
            DB::rollBack();
        }
    
        return [$project];
    }

    public function getPlatformByName($name){
        $platform = Platform::where('name',$name)->get();

        return $platform[0]->id;
    }

    public function getInfluencerClassByNameAndPlatformID($platformID,$name){
        $class = InfluencerClass::where('platform_id',$platformID)->where('name',$name)->get();

        return $class[0]->id;
    }
}
