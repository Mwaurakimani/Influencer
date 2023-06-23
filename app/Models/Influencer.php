<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Influencer extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $guarded = [];

    public function user(){
        return $this->belongsTo(User::class,'user_id','id');
    }

    public function socialAccount(){
        return $this->hasMany(SocialAccount::class);
    }

    public function bids(){
        return $this->hasMany(Bid::class);
    }

    public function projects(){
        return $this->belongsToMany(
            Project::class,
            'bids',
            'influencer_id','project_id')->withPivot(
                'bid_amount',
                'description',
                'status');
    }
}
