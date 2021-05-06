<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use App\Http\Repositories\ProductRepository as Repo;
use App\Helpers\ControllerHelper as Helper;
use Validator;

class ProductController extends Controller
{
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index()
	{
		return response()->json(Helper::response('Dados retornados com sucesso', false, Repo::index()), Response::HTTP_OK);
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store()
	{
		$validator = Validator::make(request()->all(), [
			'title' 		=> ['required'],
			'description' 	=> ['required'],
			'value' 		=> ['required'],
			'admin_id' 		=> ['required'],
		]);

		if ($validator->fails()) {
			return response()->json(Helper::response('Dados retornado com sucesso', true, $validator->errors()), Response::HTTP_BAD_REQUEST);
		}

		return response()->json(Helper::response('Registro inserido com sucesso', false, Repo::store()), Response::HTTP_CREATED);
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  \App\Models\Product  $product
	 * @return \Illuminate\Http\Response
	 */
	public function show($id)
	{
		$product = Repo::getById($id);

		if (is_array($product)) {
			return response()->json(Helper::response('Produto não encontrado', true, $product), Response::HTTP_BAD_REQUEST);
		}
		return response()->json(Helper::response('Dados retornado com sucesso', false, Repo::getById($id)), Response::HTTP_OK);
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \App\Models\Product  $product
	 * @return \Illuminate\Http\Response
	 */
	public function update($id)
	{
		$validator = Validator::make(request()->all(), [
			'title' 		=> ['required'],
			'description' 	=> ['required'],
			'value' 		=> ['required'],
			'admin_id' 		=> ['required'],
		]);

		if ($validator->fails()) {
			return response()->json(Helper::response('Dados retornado com sucesso', true, $validator->errors()), Response::HTTP_BAD_REQUEST);
		}

		return response()->json(Helper::response('Registro atualizado com sucesso', false, Repo::update($id)), Response::HTTP_OK);
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  \App\Models\Product  $product
	 * @return \Illuminate\Http\Response
	 */
	public function destroy($id)
	{
		return response()->json(Helper::response('Registro deletado com sucesso', false, Repo::delete($id)), Response::HTTP_OK);
	}
}
