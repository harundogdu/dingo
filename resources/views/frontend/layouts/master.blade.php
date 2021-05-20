<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
     <!-- CSRF Token -->
     <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <link rel="icon" href="{{ asset('frontend/dingo/img/favicon.png') }}">
    <!-- style CSS -->
    <link rel="stylesheet" href="{{ mix('frontend/dingo/css/dingo.css') }}">
</head>

<body>    
    <!--::header part start::-->
    @include('frontend.partials.header')
    <!-- Header part end-->

    @yield('content')

    <!-- footer part start-->
    @include('frontend.partials.footer')
    <!-- footer part end-->


    <!-- custom js -->
    <script src="{{ mix('frontend/dingo/js/dingo.js') }}"></script>
</body>

</html>
