@extends('frontend.layouts.master')
@section('btnTop', 'single_page_btn')
@section('content')
    <!-- breadcrumb part start-->
    @include('frontend.partials.breadcrumb')
    <!-- breadcrumb part end-->
     <!--::chefs_part start::-->
     @include('frontend.partials.chefs_part')
     <!--::chefs_part end::-->
    <!-- intro_video_bg start-->
    @include('frontend.partials.video')
    <!-- intro_video_bg part start-->
@endsection