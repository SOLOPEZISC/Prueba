<?php

namespace App\Http\Controllers;

use App\Permit;
use Illuminate\Http\Request;

class PermitsController extends Controller
{
    public function index()
    {
        return Permit::all();
    }
    public function show($id)
    {
        $permit=Permit::find($id);
        return $permit;
    }
    public function store(Request $request)
    {
        $permit = new Permit();
        $permit->name = $request->input('name');
        $permit->description = $request->input('description');
        $permit->active = $request->input('active');
        $permit->save();
        return response()->json("succes", 200);
    }

    public function update(Request $request, $id)
    {
        $permit = Permit::find($id);
        $permit->name = $request->input('name');
        $permit->description = $request->input('description');
        $permit->active = $request->input('active');
        $permit->save();
        return response()->json("succes", 200);
        }

    public function delete($id)
    {
        $permit = new Permit();
        $permit->destroy($id);
        return response()->json("succes", 200);
    }
}
