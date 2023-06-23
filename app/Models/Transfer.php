<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transfer extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function initiator(){
        return $this->hasOne(User::class,'id','from');
    }

    public function receiver(){
        return $this->hasOne(User::class,'id','to');
    }
}
