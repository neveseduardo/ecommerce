<?php

namespace App\Http\Repositories;

use App\Models\Product;
use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Helpers\FileHelper;


class ProductRepository extends Controller
{
	public static function get()
	{
		return ['categories' => self::getCategories()];
	}

	public static function getCategories()
	{
		return Category::where('active', 1)->get();
	}

	public static function index()
	{
		return Product::where('active', 1)->get();
	}

	public static function store()
	{
		$product = Product::create([
			'title' => request('title'),
			'description' => request('desciption'),
			'value' => request('value'),
			'discount' => request('discount'),
			'margin' => request('margin'),
			'cod_bar' => request('cod_bar'),
			'quantity' => request('quantity'),
			'image' => FileHelper::uploadFile(request()->file('image')),
			'category_id' => request('category_id'),
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
			'description' => request('desciption'),
			'value' => 'value',
			'discount' => request('discount'),
			'margin' => request('margin'),
			'cod_bar' => request('cod_bar'),
			'quantity' => request('quantity'),
			'image' => null,
			'category_id' => request('category_id'),
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
