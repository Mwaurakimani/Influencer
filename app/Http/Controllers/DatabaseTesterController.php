<?php

namespace App\Http\Controllers;

use App\Http\HelperClasses\BidsClasses\BidsClass;
use App\Http\HelperClasses\ProjectClasses\ProjectClass;
use App\Http\HelperClasses\UsersClass\MarketerClass;
use App\Http\HelperClasses\UsersClass\UserClass;
use App\Models\Assignment;
use App\Models\Influencer;
use App\Models\Marketer;
use App\Models\SocialAccount;
use App\Http\HelperClasses\UsersClass\InfluencerClass;
use Illuminate\Support\Arr;
use function PHPUnit\Framework\returnArgument;

class DatabaseTesterController extends Controller
{
    public function execute()
    {
        $bid = new BidsClass(1);

        dd(Assignment::updateOrCreate(
            ['bid_id' => $bid->model->id],
            ['agreed_price' => 50000]
        ));
    }

    public function createProject()
    {
        $marketer = Marketer::find(1);
        $project = [
            "id" => 27,
            "title" => "First Project",
            "type" => "Airtime",
            "description" => "This is the description",
            "budget" => "1000",
            "metrics" => "Hrs",
            "runtime" => "20",
            "notes" => "No notes",
            "location" => null,
            "requirements" => [
                [
                    'platform' => 'facebook',
                    'post_location' => 'Post',
                    'influencerClass' => 'Nano-Influencer',
                    'targets' => json_encode([
                        'unit' => "hr",
                        'value' => 10
                    ])
                ]
            ]
        ];

        try {
            $projects = new ProjectClass($project, $marketer);
        } catch (\Exception $e) {
            dd($e);
        }

        dd($projects);
    }

    public function createInfluencer()
    {
        $userData = [
            'first_name' => 'Influencer',
            'last_name' => 'one',
            'email' => 'influencer@gmail.com',
            'phone' => '9089879843',
            'password' => bcrypt('password'),
            'creditBalance' => 0,
            'gender' => 'Male',
            'date_of_birth' => '2023-03-03',
            'country' => 'Kenya',
            'location' => 'Nairobi',
            'role' => 'Influencer',
            'bio' => 'bio',
            'socialAccounts' => [
                [
                    'platform' => 'facebook',
                    'username' => 'mwaurakimani_f',
                    'influencerClass' => 'Nano-Influencer'
                ],
                [
                    'platform' => 'twitter',
                    'username' => 'mwaurakimani_tw',
                    'influencerClass' => 'Nano-Influencer'
                ]
            ]
        ];

        try {
            $influencer = new InfluencerClass($userData);
        } catch (\Exception $e) {
            dd($e);
        }

        dd($influencer);
    }

    public function createBid()
    {
        $bid = [
            'project_id' => 27,
            'influencer_id' => 1,
            'bid_amount' => 5000,
            'description' => "This is the description",
        ];

        return new BidsClass($bid);
    }
}

//$marketer = [
//    'first_name' => 'Marketer',
//    'last_name' => 'oneeeeeeeeeee',
//    'email' => 'marketerx@gmail.com',
//    'phone' => '9089803343',
//    'password' => bcrypt('password'),
//    'creditBalance' => 0,
//    'role' => 'marketer',
//    'brand_name' => 'Naivas',
//];


//$userData = [
//    'first_name' => 'Influencer',
//    'last_name' => 'one',
//    'email' => 'influencer@gmail.com',
//    'phone' => '9089879843',
//    'password' => bcrypt('password'),
//    'creditBalance' => 0,
//    'gender' => 'Male',
//    'date_of_birth' => '2023-03-03',
//    'country' => 'Kenya',
//    'location' => 'Nairobi',
//    'role' => 'Influencer',
//    'bio' => 'bio',
//    'socialAccounts' => [
//        [
//            'platform' => 'facebook',
//            'username' => 'mwaurakimani_f',
//            'influencerClass' => 'Nano-Influencer'
//        ],
//        [
//            'platform' => 'twitter',
//            'username' => 'mwaurakimani_tw',
//            'influencerClass' => 'Nano-Influencer'
//        ]
//    ]
//];
