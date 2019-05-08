<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('permit','PermitsController@index');
Route::get('permit/{id}','PermitsController@show');
Route::post('permit', 'PermitsController@store');
Route::put('permit/{id}','PermitsController@update');
Route::delete('permit/{id}','PermitsController@delete');

Route::get('profiles','ProfilesController@index');
Route::post('profiles', 'ProfilesController@store');
Route::put('profiles/{id}','ProfilesController@update');
Route::delete('profiles/{id}','ProfilesController@delete');

Route::get('users','UsersController@index');
Route::post('users', 'UsersController@store');
Route::post('users/check', 'UsersController@login');
Route::put('users/{id}','UsersController@update');
Route::delete('users/{id}','UsersController@delete');