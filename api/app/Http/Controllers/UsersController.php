<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
class UsersController extends Controller
{
    public function index()
    {
        return User::all();
    }
    public function login(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'password' => 'required',
        ]);

        $user = new User();
        $name = $request->input('name');
        $password = $request->input('password');
        $valor=$user->verificar($name, $password);
        return response()->json($valor, 200);
    }
    public function store(Request $request)
    {
        
        $user = new User();
        $user->name = $request->input('name');
        $user->id_role = $request->input('id_role');
        $user->curp = $request->input('curp');
        $user->rfc = $request->input('rfc');
        $user->password = Crypt::encryptString($request->input('password'));
        $user->active = $request->input('active');
        $user->nick = $request->input('nick');
        $user->first_name = $request->input('first_name');
        $user->last_name = $request->input('last_name');
        $user->save();
        return response()->json("succes", 200);
    }

    public function update(Request $request, $id)
    {

        $user = User::find($id);
        $user->name = $request->input('name');
        $user->id_role = $request->input('id_role');
        $user->curp = $request->input('curp');
        $user->rfc = $request->input('rfc');
        $user->password = $request->input('password');
        $user->active = $request->input('active');
        $user->nick = $request->input('nick');
        $user->first_name = $request->input('first_name');
        $user->last_name = $request->input('last_name');
        $user->save();
        return response()->json("succes", 200);
    }

    public function delete($id)
    {
        $user = new User();
        $user->destroy($id);
        return response()->json("succes", 200);
    }
}
