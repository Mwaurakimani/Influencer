<?php

namespace App\Http\HelperClasses\AbstractClasses;

abstract class AbstractModelMethods
{


    public function deleteModel($model = null)
    {
        if ($model != null) {
            $model->delete();
        } else {
            if ($this->model != null) {
                $this->model->delete();
            }
        }
    }

    //Extractable
    public function updateModel(array $data, $model = null)
    {
        if ($model == null) {
            $model = $this->model;
        }

        if (count($data) > 0) {
            foreach ($data as $key => $value) {
                if ($value != null) {
                    $model[$key] = $value;
                }
            }
        }

        $model->save();
        return $model;
    }
}
