<?php

namespace App\Http\HelperClasses\UsersClass;

use App\Models\Influencer;
use App\Models\Platform;
use App\Models\SocialAccount;
use App\Models\User;

class InfluencerClass extends UserClass
{
    use SocialAccountsClass;

    public function __construct($varArgs)
    {

        if (gettype($varArgs) == 'integer') {

            if (Influencer::find($varArgs)) {
                $this->model = Influencer::find($varArgs)->user()->first();
                $this->model['influencer'] = Influencer::find($varArgs);
            } else {
                $this->model = null;
            }

            parent::__construct($this->model);

        } else if (gettype($varArgs) == 'object') {

            $this->model = $varArgs->user()->first();
            $this->model['influencer'] = $varArgs;

            parent::__construct($this->model);

        } else if (gettype($varArgs) == 'array') {
            $userData = [
                'id' => $varArgs['id'] ?? null,
                'first_name' => $varArgs['first_name'] ?? null,
                'last_name' => $varArgs['last_name'] ?? null,
                'email' => $varArgs['email'] ?? null,
                'phone' => $varArgs['phone'] ?? null,
                'password' => $varArgs['password'] ?? null,
                'creditBalance' => $varArgs['creditBalance'] ?? null,
                'designation' => $varArgs['designation'] ?? null
            ];

            $influencerData = [
                'gender' => $varArgs['gender'] ?? null,
                'date_of_birth' => date('Y-m-d', strtotime($varArgs['date_of_birth'])) ?? null,
                'country' => $varArgs['country'] ?? null,
                'location' => $varArgs['location'] ?? null,
                'role' => $varArgs['role'] ?? null,
                'bio' => $varArgs['bio'] ?? null,
                'image_path' => $varArgs['image_path'] ?? null,
            ];

            $socialAccounts = $varArgs['socialAccounts'] ?? null;

            parent::__construct($userData);

            if (Influencer::where('user_id', $this->model->id)->get()->count() > 0) {
                $influencer_model = $this->model->influencer()->first();

                $this->updateModel($influencerData, $influencer_model);
            } else {
                if ($influencerData['role'] != null) {
                    $this->createInfluencer($influencerData);
                }
            }

            if ($socialAccounts != null) {
                if (gettype($socialAccounts) == 'array' && count($socialAccounts) > 0) {
                    foreach ($socialAccounts as $accountKey => $accountValue) {


                        $platform = Platform::where('name', 'LIKE', '%' . $accountValue['platform'] . '%')->first();
                        $platform_id = $platform != null ? $platform->id : null;

                        $influencerClass = $platform_id != null ? \App\Models\InfluencerClass::where('platform_id', $platform_id)->where('name', 'LIKE', '%' . $accountValue['influencerClass'] . '%')->first() : null;

                        if ($platform != null && $influencerClass != null) {
                            $influencerClass_id = $influencerClass->id;

                            $userSocialAccount = $this->model['influencer']->socialAccount()->get();

                            $requirement = null;

                            foreach ($userSocialAccount as $key => $value) {
                                if ($value['platform']->name == $accountValue['platform']) {
                                    $requirement = $value;
                                }
                            }

                            if ($requirement == null) {
                                $this->createSocialAccount($accountValue['username'], $influencerClass_id);
                            } else {
                                $this->updateSocialAccount($requirement, $accountValue['username'], $influencerClass_id);
                            }

                        } else {
                            continue;
                        }
                    }
                }
            }


            $this->model = $this->model->refresh();

            if ($influencerData['role'] != null) {
                $this->model['influencer'] = $this->model->influencer()->first();
            }

            if ($socialAccounts != null) {
                $this->model['socialAccounts'] = $this->model['influencer']->socialAccount()->get();
            }
        } else {
            throw new \Exception('Error creating model Influencer');
        }

        $this->model = $this->model->refresh();
        $this->model['influencer'] = $this->model->influencer()->first();

        if($this->model['influencer'] != null){
            $this->model['socialAccounts'] = $this->model['influencer']->socialAccount()->get();
        }

    }

    public function createInfluencer($data)
    {
        $this->model->influencer()->create([
            'gender' => $data['gender'],
            'date_of_birth' => $data['date_of_birth'],
            'country' => $data['country'],
            'location' => $data['location'],
            'role' => $data['role'],
            'bio' => $data['bio'],
            'image_path' => $data['image_path'],
        ]);
    }
}
