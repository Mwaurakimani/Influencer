<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Project extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $appends = ['platformRequirements'];

    protected $guarded = [];

    public function projectRequirements()
    {
        return $this->hasMany(ProjectRequirements::class);
    }

    protected function platforms()
    {
        return null;
    }

    public function bids()
    {
        return $this->hasMany(Bid::class);
    }

    public function marketer()
    {
        return $this->belongsTo(Marketer::class);
    }

    public function assignment()
    {
        return $this->hasOneThrough(Assignment::class, Bid::class);
    }

    public function getPlatformRequirementsAttribute()
    {
        $project_id = $this->attributes['id'];
        return ProjectRequirements::where('project_id', $project_id)->get();
    }
}
