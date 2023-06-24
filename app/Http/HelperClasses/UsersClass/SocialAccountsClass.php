<?php

namespace App\Http\HelperClasses\UsersClass;

trait SocialAccountsClass
{
    public function createSocialAccount($username,$influencer_class_id)
    {
        $this->model['influencer']->socialAccount()->create([
            'influencer_class_id' => $influencer_class_id,
            'username' => $username,
        ]);
    }

    public function updateSocialAccount($socialAccount,$username,$influencer_class_id)
    {
        $socialAccount->update([
            'influencer_class_id' => $influencer_class_id,
            'username' => $username,
        ]);
    }
}
