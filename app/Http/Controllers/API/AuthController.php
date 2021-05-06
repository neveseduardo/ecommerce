<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Helpers\ControllerHelper as Helper;
use App\Models\User;
use Validator;

class AuthController extends Controller
{
	/**
	 * Create user
	 *
	 * @param  [string] name
	 * @param  [string] email
	 * @param  [string] password
	 * @param  [string] password_confirmation
	 * @return [string] message
	 */
	public function register()
	{
		$validator = Validator::make(request()->all(), [
			'name' 		=> ['required', 'string'],
			'email' 	=> ['required', 'string', 'email', 'unique:users'],
			'password' 	=> ['required', 'string', 'confirmed']
		]);

		if ($validator->fails()) {
			return response()->json(Helper::response('Erro ao validar campos', true, $validator->errors()), 200);
		}

		User::create([
			'name' 		=> request('name'),
			'email' 	=> request('email'),
			'password' 	=> \Hash::make(request('password'))
		]);
		return response()->json(Helper::response('Usuário criado com sucesso'), 200);
	}

	/**
	 * Login admin and create token
	 *
	 * @param  [string] email
	 * @param  [string] password
	 * @param  [boolean] remember_me
	 * @return [string] access_token
	 * @return [string] token_type
	 * @return [string] expires_at
	 */
	public function adminLogin()
	{
		$validator = Validator::make(request()->all(), [
			'email' 		=> ['required', 'string', 'email'],
			'password' 		=> ['required', 'string'],
		]);

		if ($validator->fails()) {
			return response()->json(Helper::response('Erro ao validar campos', true, $validator->errors()), 200);
		}

		$credentials = request(['email', 'password']);

		if (!\Auth::guard('admin')->attempt($credentials)) return response()->json(Helper::response('Usuário ou senha inválidos', true), 401);

		$user = \Auth::guard('admin')->user();
		$tokenResult = $user->createToken('Personal Access Token');
		$token = $tokenResult->token;
		$token->save();
		$ret = ['token' => $tokenResult->accessToken];
		return response()->json(Helper::response('Login efetuado com sucesso', false, $ret), 200);
	}
	/**
	 * Login user and create token
	 *
	 * @param  [string] email
	 * @param  [string] password
	 * @param  [boolean] remember_me
	 * @return [string] access_token
	 * @return [string] token_type
	 * @return [string] expires_at
	 */
	public function userLogin()
	{
		$validator = Validator::make(request()->all(), [
			'email' 		=> ['required', 'string', 'email'],
			'password' 		=> ['required', 'string'],
		]);

		if ($validator->fails()) {
			return response()->json(Helper::response('Erro ao validar campos', true, $validator->errors()), 200);
		}

		$credentials = request(['email', 'password']);

		if (!\Auth::attempt($credentials)) return response()->json(Helper::response('Usuário ou senha inválidos', true), 401);

		$user = request()->user();
		$tokenResult = $user->createToken('Personal Access Token');
		$token = $tokenResult->token;
		$token->save();
		$ret = ['token' => $tokenResult->accessToken];
		return response()->json(Helper::response('Login efetuado com sucesso', false, $ret), 200);
	}

	/**
	 * Get the authenticated User
	 *
	 * @return [json] user object
	 */
	public function getAdmin()
	{
		$user = request()->user();
		$ret = ['name' => $user->name, 'email' => $user->email];
		return response()->json(Helper::response('Dados retornados com sucesso', false, $ret));
	}
	/**
	 * Get the authenticated User
	 *
	 * @return [json] user object
	 */
	public function getUser()
	{
		$user = request()->user();
		$ret = ['name' => $user->name, 'email' => $user->email];
		return response()->json(Helper::response('Dados retornados com sucesso', false, $ret));
	}
}
