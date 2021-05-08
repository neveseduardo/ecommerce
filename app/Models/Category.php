<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

	protected $fillable = [
		'title',
		'description',
		'active',
		'admin_id'
	];

	public function admin () {
		return $this->belongsTo(\App\Models\Admin::class, 'admin_id');
	}

	public function products () {
		return $this->hasMany(\App\Models\Product::class);
	}
}
