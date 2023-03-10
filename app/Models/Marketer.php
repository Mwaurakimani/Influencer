<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Marketer extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function user(){
        return $this->belongsTo(User::class,'id','user_id');
    }

    public function company(){
        return $this->hasOne(Company::class);
    }

    public function projects(){
        return $this->hasMany(Project::class);
    }
}
