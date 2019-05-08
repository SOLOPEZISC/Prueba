<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Crypt;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'curp', 'rfc', 'password', 'active', 'nick', 'first_name', 'last_name'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function profiles()
    {
        return $this->belongsTo('App\Profiles');
    }
    public function verificar($name, $password)
    {
        $res=DB::select('select password from users where name = ?', [$name]);
        if (!$res) {
           return false;
        }
        $decrypted = Crypt::decryptString($res[0]->password);
        if ($decrypted==$password) {
           return Crypt::encryptString($password);
        }
        return false;
    }
}
