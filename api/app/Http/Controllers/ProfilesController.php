<?php

namespace App\Http\Controllers;
use App\Profiles;
use Illuminate\Http\Request;

class ProfilesController extends Controller
{
    public function index()
    {
 
        return Profiles::all();
        
        
    }
    public function store(Request $request)
    {
        $profiles = new Profiles();
        $profiles->name = $request->input('name');
        $profiles->description = $request->input('description');
        $profiles->super = $request->input('super');
        $profiles->active = $request->input('active');
        $profiles->save();
        $id_permit=$request->input('id_permit');
        $id_role=$profiles->id;
        $profiles->insert_perm_prof($id_permit,$id_role);
        return response()->json("succes", 200);
    }

    public function update(Request $request, $id)
    {
        $profiles = Profiles::find($id);
        $profiles->name = $request->input('name');
        $profiles->description = $request->input('description');
        $profiles->super = $request->input('super');
        $profiles->active = $request->input('active');
        $profiles->save();
        return response()->json("succes", 200);
    }

    public function delete($id)
    {
        $profiles = new Profiles();
        $profiles->destroy($id);
        return response()->json("succes", 200);
    }
}
