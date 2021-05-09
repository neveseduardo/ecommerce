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
	 * Return data to frontend.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function get()
	{
		return response()->json(Helper::response('Dados retornados com sucesso', false, Repo::get()), Response::HTTP_OK);
	}
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
			'value' 		=> ['required'],
			'discount' 		=> ['required'],
			'margin' 		=> ['required'],
			'quantity' 		=> ['required'],
			'image' 		=> ['sometimes', 'image', 'mimes:jpeg,bmp,png,gif', 'max:2048'],
			'category_id' 	=> ['required'],
		]);

		if ($validator->fails()) {
			return response()->json(Helper::response('Erro ao validar dados', true, $validator->errors()), Response::HTTP_BAD_REQUEST);
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
			'value' 		=> ['required'],
			'discount' 		=> ['required'],
			'margin' 		=> ['required'],
			'cod_bar' 		=> ['required'],
			'quantity' 		=> ['required'],
			'image' 		=> ['sometimes', 'image', 'mimes:jpeg,bmp,png,gif', 'max:2048'],
			'category_id' 	=> ['required'],
		]);

		if ($validator->fails()) {
			return response()->json(Helper::response('Dados retornado com sucesso', true, $validator->errors()), Response::HTTP_BAD_REQUEST);
		}

		return response()->json(Helper::response('Registro atualizado com sucesso', false, Repo::update($id)), Response::HTTP_OK);
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  Int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function destroy($id)
	{
		return response()->json(Helper::response('Registro deletado com sucesso', false, Repo::delete($id)), Response::HTTP_OK);
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  String  $filename
	 * @return \Illuminate\Http\Response
	 */
	public function getFile()
	{
		$filename = request('filename');
		$file = public_path('/products/' . $filename);
		$ext = end(explode('.', $filename));
		$headers = ["Content-type: image/{$ext}"];

		if (!is_dir($file) && file_exists($file)) {
			return response()->download($file, $filename, $headers);
		}

		return response()->json(Helper::response('Erro ao recuperar imagem', true, null), Response::HTTP_NOT_FOUND);
	}
}
