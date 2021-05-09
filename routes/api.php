<?php

use App\Models\Product;
use Illuminate\Support\Facades\Route;

Route::prefix('auth')->name('auth.')->namespace('API')->group(function () {
	Route::post('register', 'AuthController@register');
	Route::post('userLogin', 'AuthController@userLogin');
	Route::post('adminLogin', 'AuthController@adminLogin');
});

Route::prefix('user')->namespace('API')->middleware(['auth:api'])->group(function () {
	Route::get('/', 'AuthController@getUser');
});
Route::prefix('admin')->namespace('API')->middleware(['auth:admin-api'])->group(function () {
	Route::get('/', 'AuthController@getAdmin');
});
Route::prefix('products')->namespace('API')->group(function () {
	Route::middleware(['auth:admin-api'])->group(function () {
		Route::get('/get', 'ProductController@get');
		Route::post('/store', 'ProductController@store');
		Route::post('/update/{id}', 'ProductController@update')->where('id', '[0-9]+');
		Route::post('/delete/{id}', 'ProductController@destroy')->where('id', '[0-9]+');
	});
	Route::get('/', 'ProductController@index');
	Route::get('/{id}', 'ProductController@show')->where('id', '[0-9]+');	
});

Route::fallback(function () {
	return response()->json(['message' => 'Rota não encontrada.'], 404);
});
