<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    use HasFactory;

	protected $fillable = ['user_id', 'product_id'];

	public function user () {
		return $this->belongsTo(\App\Models\Admin::class, 'user_id');
	}
	public function product () {
		return $this->belongsTo(\App\Models\Product::class, 'product_id');
	}
}
