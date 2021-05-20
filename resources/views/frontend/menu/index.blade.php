@extends('frontend.layouts.master')
@section('btnTop', 'single_page_btn')
@section('content')
    <!-- breadcrumb part start-->
    @include('frontend.partials.breadcrumb')
    <!-- breadcrumb part end-->
    <!-- food_menu start-->
    @include('frontend.partials.food_menu')
    <!-- food_menu part end-->
    <!-- intro_video_bg start-->
    @include('frontend.partials.video')
    <!-- intro_video_bg part start-->
@endsection
