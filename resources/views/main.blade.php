<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1.0" />
    <meta name="theme-color" content="#ffffff" />

    <title>{{ env('APP_NAME') }}</title>

    <meta name="description" content="{{ env('APP_DESCRIPTION') }}" />
    <meta name="author" content="{{ env('APP_AUTHOR') }}" />
    <meta name="robots" content="index,nofollow" />

    <link rel="shortcut icon" href="/favicon.png" />
    <link rel="canonical" href="{{ url('/') }}" />

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

    @if (parse_url(url('/'), PHP_URL_SCHEME) == 'HTTPS')
        <link rel="stylesheet" href="{{ secure_asset('css/fa/all.min.css') }}">
        <link rel="stylesheet" href="{{ secure_asset('css/app.css') }}">
    @else
        <link rel="stylesheet" href="{{ asset('css/fa/all.min.css') }}">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    @endif
</head>

<body>

    <div id="app"></div>

    @if (parse_url(url('/'), PHP_URL_SCHEME) == 'HTTPS')
        <script src="{{ secure_asset('js/app.js') }}"></script>
    @else
        <script src="{{ mix('js/app.js') }}"></script>
    @endif
</body>

</html>
