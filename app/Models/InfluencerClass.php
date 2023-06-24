<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InfluencerClass extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function platform()
    {
        return $this->belongsTo(Platform::class);
    }
}
