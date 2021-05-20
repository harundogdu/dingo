@extends('frontend.layouts.master')
@section('btnTop', 'single_page_btn')
@section('content')
    <!-- breadcrumb part start-->
    @include('frontend.partials.breadcrumb')
    <!-- breadcrumb part end-->
    <!-- about part start-->
    @include('frontend.partials.about')
    <!-- about part end-->
    <!--::review_part start::-->
    @include('frontend.partials.review_part')
    <!--::review_part end::-->
    <!--::chefs_part start::-->
    @include('frontend.partials.chefs_part')
    <!--::chefs_part end::-->
@endsection
