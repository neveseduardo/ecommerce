<?php

namespace App\Helpers;

class FileHelper
{
	public static function uploadFile ($file, $ext = null) {
		if ($file === null) {
			return null;
		}
		$ext = $ext ? $ext : $file->getClientOriginalExtension();
		$name = microtime() . '.' . $ext;
		$file->storeAs('products', $name);
		return $name;
	}

}
