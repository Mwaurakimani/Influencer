<?php

namespace App\Http\HelperClasses\UsersClass;

use App\Models\Marketer;
use App\Models\User;

class MarketerClass extends UserClass
{
    public function __construct($varArgs)
    {
        if (gettype($varArgs) == 'integer') {

            if (Marketer::find($varArgs)) {
                $this->model = Marketer::find($varArgs)->user()->first();
                $this->model['marketer'] = Marketer::find($varArgs);
            } else {
                $this->model = null;
            }

            parent::__construct($this->model);

        } else if (gettype($varArgs) == 'object') {

            $this->model = $varArgs->user()->first();
            $this->model['marketer'] = $varArgs;

            parent::__construct($this->model);

        } else if (gettype($varArgs) == 'array') {

            $userData = [
                'first_name' => $varArgs['first_name'] ?? null,
                'last_name' => $varArgs['last_name'] ?? null,
                'email' => $varArgs['email'] ?? null,
                'phone' => $varArgs['phone'] ?? null,
                'password' => $varArgs['password'] ?? null,
                'creditBalance' => $varArgs['creditBalance'] ?? null
            ];

            $marketerData = [
                'role' => $varArgs['role'] ?? null,
                'brand_name' => $varArgs['brand_name'] ?? null
            ];



            parent::__construct($userData);


            if (Marketer::where('user_id', $this->model->id)->get()->count() > 0) {
                $marketer_model = $this->model->marketer()->first();

                $this->updateModel($marketerData,$marketer_model);
            } else {
                $this->createMarketer($marketerData);
            }

            $this->model = $this->model->refresh();
            $this->model['marketer'] = $this->model->marketer()->first();


        } else {
            throw new \Exception('Error creating model Marketer');
        }


    }

    public function createMarketer($data)
    {
        $this->model->marketer()->create([
            'role' => $data['role'],
            'brand_name' => $data['brand_name']
        ]);
    }
}
