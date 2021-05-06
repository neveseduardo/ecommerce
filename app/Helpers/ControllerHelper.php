<?php

namespace App\Helpers;

class ControllerHelper
{
	public static function response($message, $error = null, $object = null)
	{
		return ['message' => $message, 'error' => $error, 'object' => $object];
	}
}
