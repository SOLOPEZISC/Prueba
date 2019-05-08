<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Permits;
use DB;

class Profiles extends Model
{
    protected $tabele = "profiles";
    protected $fillable = ['name', 'description', 'super', 'active'];

    public function permits()
    {
        return $this->belongsToMany(Permits::class, 'profiles_permits', 'id_role', 'id_permit');
    }

    public function user()
    {
        return $this->hasOne('App\User');
    }

    public function insert_perm_prof($id_permit, $id_role)
    {

        $res = DB::insert('insert into profiles_permits (id_permit, id_role, active) values (?, ?, ?)', [$id_permit, $id_role, 0]);
    }
}
