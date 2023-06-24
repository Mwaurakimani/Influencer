<?php

namespace App\Http\HelperClasses\BidsClasses;

use App\Http\HelperClasses\AbstractClasses\AbstractModelMethods;
use App\Http\HelperClasses\AssignmentTraits\AssignmentTrait;
use App\Models\Bid;
use App\Models\Influencer;
use App\Models\Marketer;
use App\Models\Project;

class BidsClass extends AbstractModelMethods
{
    use AssignmentTrait;

    public Project $project;
    public Marketer $marketer;
    public Influencer $influencer;
    public Bid $model;

    public function __construct($model = null)
    {
        $type = gettype($model);

        if ($model == null) {
            return null;
        }

        if ($type == 'array') {
            if(isset($model['id'])){
                $this->model = Bid::find($model['id']);

                $this->updateModel($model,$this->model);

                $this->model = $this->model->refresh();
            }else{
                $this->model = $this->createModel($model);
            }
        } elseif ($type == 'object') {
            $this->model = $model;
        } elseif ($type == 'integer') {
            $this->model = Bid::find($model);
        }

        $this->initializer($this->model->project_id,$this->model->influencer_id);

        return $this;
    }

    public function createModel(mixed $model)
    {

        $bid = Bid::create([
           'influencer_id' => $model['influencer_id'],
           'project_id' => $model['project_id'],
           'bid_amount' => $model['bid_amount'],
           'description' => $model['description'],
       ]);

        $this->initializer($model['project_id'], $model['influencer_id']);

        return $bid;
    }

    public function initializer($project_id, $influencer_id): void
    {
        $this->project = Project::find($project_id);

        $this->influencer = Influencer::find($influencer_id);

        $this->marketer = Marketer::find($this->project->marketer_id);

    }
}
