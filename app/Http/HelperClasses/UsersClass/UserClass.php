<?php

namespace App\Http\HelperClasses\UsersClass;

use App\Http\HelperClasses\AbstractClasses\AbstractModelMethods;
use App\Models\User;
use PhpParser\Node\Expr\Array_;
use function Symfony\Component\String\b;

class UserClass extends AbstractModelMethods
{

    public $model = null;

    /**
     * @throws \Exception
     */
    public function __construct($varArgs = null)
    {


        if (gettype($varArgs) == 'integer') {
            $this->model = User::find($varArgs);
        } else if (gettype($varArgs) == 'object') {
            $this->model = $varArgs;
        } else if (gettype($varArgs) == 'array') {

            $temp_model = null;

            if (isset($varArgs['email'])) {
                $temp_model = User::where('email', $varArgs['email'])->first();
            }

            if (isset($varArgs['id'])) {
                $temp_model = User::find($varArgs['id']);
            }

            if ($temp_model == null) {
                $this->model = $this->createUser($varArgs);
            } else {
                $this->model = $temp_model;
                $this->model = $this->updateModel($varArgs);
            }
        } else {
            throw new \Exception('Error creating model user');
        }
    }

    public function createUser($temp_user)
    {
        $model = User::Create([
            'first_name' => $temp_user['first_name'],
            'last_name' => $temp_user['last_name'],
            'email' => $temp_user['email'],
            'phone' => $temp_user['phone'],
            'password' => bcrypt($temp_user['password']),
            'designation' => $temp_user['designation'] ?? null,
            'creditBalance' => $temp_user['creditBalance'] ?? 0
        ]);

        $model->refresh();

        $this->model = $model;

        return $this->model;
    }
}
