<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectRequirements extends Model
{
    use HasFactory;

    protected $appends = ['platform','influencerClass'];


    protected $guarded = [];

    public function project(){
        return $this->belongsTo(Project::class);
    }

    public function getPlatformAttribute(){
        $influencerClass = InfluencerClass::where('id',$this->attributes['influencer_classes_id'])->first();
        return Platform::where('id',$influencerClass->platform_id)->first();
    }

    public function getInfluencerClassAttribute(){
        return InfluencerClass::where('id',$this->attributes['influencer_classes_id'])->first();
    }
}
