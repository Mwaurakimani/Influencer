<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class InfluencerController extends Controller
{
    public function getActiveProjects(Request $request, User $user)
    {
        return $influencer = $user->influencer->projects()->with('bids','platforms','projectRequirements')->get();
    }
}
