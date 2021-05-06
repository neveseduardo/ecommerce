<?php

namespace App\Http\Repositories;

use App\Models\Product;
use App\Http\Controllers\Controller;


class ProductRepository extends Controller
{
	public static function index()
	{
		return Product::where('active', 1)->get();
	}

	public static function store()
	{
		$product = Product::create([
			'title' => request('title'),
			'description' => request('description'),
			'value' => request('value'),
			'discount' => request('discount'),
			'admin_id' => request('admin_id'),
		]);

		return self::getById($product->id);
	}

	public static function getById($id)
	{
		try {
			$product = Product::findorfail($id);
			return $product;
		} catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
			return [];
		}
	}

	public static function update($id)
	{
		Product::where('id', $id)->update([
			'title' => request('title'),
			'description' => request('description'),
			'value' => request('value'),
			'discount' => request('discount'),
			'admin_id' => request('admin_id'),
		]);

		return self::getById($id);
	}

	public static function delete($id)
	{
		Product::where('id', $id)->update([
			'active' => 0,
		]);
		return self::index();
	}
}
