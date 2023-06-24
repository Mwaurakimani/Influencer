<?php

namespace App\Models;

use App\Models\Scopes\SocialAccountsScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use PhpParser\Builder;

class SocialAccount extends Model
{
    use HasFactory;
    protected $appends = ['platform','influencerClass'];

    protected $guarded = [];

    public function influencerClass(){
        return $this->belongsTo(InfluencerClass::class);
    }

    public function getPlatformAttribute(){
        $influencerClass = InfluencerClass::where('id',$this->attributes['influencer_class_id'])->first();
        return Platform::where('id',$influencerClass->platform_id)->first();
    }

    public function getInfluencerClassAttribute(){
        return InfluencerClass::where('id',$this->attributes['influencer_class_id'])->first();

    }


}
