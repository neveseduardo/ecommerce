<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
	use HasFactory;

	protected $fillable = ['title', 'description', 'value', 'discount', 'views', 'hating', 'admin_id'];

	public function admin () {
		return $this->belongsTo(\App\Models\Admin::class, 'admin_id');
	}

	public function likes () {
		return $this->hasMany(\App\Models\Like::class);
	}
}
