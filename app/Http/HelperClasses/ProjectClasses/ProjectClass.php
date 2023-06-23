<?php

namespace App\Http\HelperClasses\ProjectClasses;

use App\Http\HelperClasses\AbstractClasses\AbstractModelMethods;
use App\Models\Marketer;
use App\Models\Platform;
use App\Models\Project;
use App\Models\ProjectRequirements;

class ProjectClass extends AbstractModelMethods
{
    use RequirementsClass;
    /**
     * @throws \Exception
     */
    public function __construct($model = null, Marketer $owner)
    {
        //get Projects

        if (gettype($model) == 'array') {

            if (isset($model['id'])) {
                $data = [
                    'title' => $model['title'] ?? null,
                    'type' => $model['type'] ?? null,
                    'description' => $model['description'] ?? null,
                    'budget' => $model['budget'] ?? null,
                    'metrics' => $model['metrics'] ?? null,
                    'runtime' => $model['runtime'] ?? null,
                    'notes' => $model['notes'] ?? null,
                    'location' => $model['location'] ?? null,
                ];

                $project = Project::where('id', $model['id'])->first();
                $this->model = $this->updateModel($data, $project);
            } else {
                $project = $owner->projects()->create([
                    'title' => $model['title'],
                    'type' => $model['type'],
                    'description' => $model['description'] ?? null,
                    'budget' => $model['budget'],
                    'metrics' => $model['metrics'],
                    'runtime' => $model['runtime'],
                    'notes' => $model['notes'] ?? null,
                    'location' => $model['location'] ?? null,
                ]);

                $this->model = $project;
            }

            $this->model = $this->model->refresh();

        } elseif (gettype($model) == 'object') {
            $this->model = $model;
        } elseif (gettypes($model) == 'integer') {
            $this->model = Project::find($model);
        } else {
            throw new \Exception('Error generating project');
        }

        $socialAccounts = $model['requirements'] ?? null;

        if ($socialAccounts != null) {
            if (gettype($socialAccounts) == 'array' && count($socialAccounts) > 0) {

                foreach ($socialAccounts as $accountKey => $accountValue) {

                    $platform = Platform::where('name', 'LIKE', '%' . $accountValue['platform'] . '%')->first();

                    $platform_id = $platform != null ? $platform->id : null;

                    $influencerClass = $platform_id != null ? \App\Models\InfluencerClass::where('platform_id', $platform_id)->where('name', 'LIKE', '%' . $accountValue['influencerClass'] . '%')->first():null;

                    if ($platform != null && $influencerClass != null) {
                        $influencerClass_id = $influencerClass->id;

                        $userSocialAccount = $this->model->projectRequirements()->get();

                        $requirement = null;

                        foreach ($userSocialAccount as $key => $value){
                            if($value['platform']->name == $accountValue['platform']){
                                $requirement = $value;
                            }
                        }

                        $data = [
                            'post_location' => $accountValue['post_location'],
                            'targets' => $accountValue ['targets'],
                            'influencer_classes_id' => $influencerClass_id
                        ];

                        if($requirement == null){
                            $this->createRequirement($data);
                        }else{
                            $this->updateRequirement($data, $requirement);
                        }

                    } else {
                        continue;
                    }
                }
            }
        }

        $this->model = $this->model->refresh();
        $this->model['projectRequirements'] = $this->model->projectRequirements()->get();

        return $this->model;
    }
}
