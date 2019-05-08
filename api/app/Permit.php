<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Permit extends Model
{
    protected $tabele ="permits";
    protected $fillable=['name','description','active'];

    public function profiles()
    {
        return $this->belongsToMany(Profiles::class,'profiles_permits','id_permit','id_role');
    }
}
