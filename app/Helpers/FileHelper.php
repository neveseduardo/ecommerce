<?php

namespace App\Helpers;

class FileHelper
{
	public static function uploadFile($file, $ext = null, $name = null)
	{
		if ($file === null) {
			return null;
		}
		if ($name) {
			$old = public_path('/products/' . $name);

			if (!is_dir($old) && file_exists($old)) {
				unlink($old);
			}
		}
		$ext = $ext ? $ext : $file->getClientOriginalExtension();
		$name = microtime() . '.' . $ext;
		$file->storeAs('products' . $name, 'public');
		return $name;
	}
}
