<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Marketer extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $guarded = [];

    public function user(){
        return $this->belongsTo(User::class,'user_id','id');
    }

//    public function company(){
//        return $this->hasOne(Company::class);
//    }

    public function projects(){
        return $this->hasMany(Project::class);
    }


}
