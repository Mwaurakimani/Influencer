<?php

namespace App\Http\HelperClasses\ProjectClasses;

use App\Models\ProjectRequirements;

trait RequirementsClass
{
    public function createRequirement($data)
    {
        $this->model['requirements'] = $this->model->projectRequirements()->create([
            'post_location' => $data['post_location'],
            'targets' => json_encode($data['targets']),
            'influencer_classes_id' => $data['influencer_classes_id']
        ]);
    }

    public function updateRequirement($data,ProjectRequirements $projectRequirements)
    {
        $this->model['requirements'] = $projectRequirements->update([
            'post_location' => $data['post_location'],
            'targets' => json_encode($data['targets']),
            'influencer_classes_id' => $data['influencer_classes_id']
        ]);
    }
}
