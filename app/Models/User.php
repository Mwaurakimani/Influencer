<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Jetstream\HasProfilePhoto;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use SoftDeletes;
    use HasApiTokens;
    use HasFactory;
    use HasProfilePhoto;
    use Notifiable;
    use TwoFactorAuthenticatable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone',
        'password',
        'designation',
        'creditBalance',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes',
        'two_factor_secret',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array<int, string>
     */
    protected $appends = [
        'profile_photo_url',
    ];

    public function marketer()
    {
        return $this->hasOne(Marketer::class);
    }

    public function influencer()
    {
        return $this->hasOne(Influencer::class);
    }

    public function media()
    {
        return $this->belongsToMany(
            Media::class,
            'media_owner',
            'user_id',
            'media_id'
        )->withPivot('id');
    }

    public function creditManipulation()
    {
        return $this->hasMany(
            CreditManipulation::class,
            'agent_id',
            'id');
    }

    public function deposits()
    {
        return $this->hasMany(
            Deposit::class,
            'user_id',
            'id');
    }

    public function withdrawals()
    {
        return $this->hasMany(Withdrawal::class,
            'user_id',
            'id');
    }

    public function CreditsTransferred()
    {
        return $this->hasMany(
            Transfer::class,
            'from',
            'id');
    }

    public function CreditsReceived()
    {
        return $this->hasMany(
            Transfer::class,
            'to',
            'id');
    }

}
