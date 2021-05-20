@extends('frontend.layouts.master')
@section('content')
    <!-- banner part start-->
    @include('frontend.partials.banner')
    <!-- banner part start-->

    <!--::exclusive_item_part start::-->
    @include('frontend.partials.exclusive')
    <!--::exclusive_item_part end::-->

    <!-- about part start-->
    @include('frontend.partials.about')
    <!-- about part end-->
   
    <!--::chefs_part start::-->
    @include('frontend.partials.chefs_part')
    <!--::chefs_part end::-->

    <!--::regervation_part start::-->
    @include('frontend.partials.regervation_part')
    <!--::regervation_part end::-->

    <!--::review_part start::-->
    @include('frontend.partials.review_part')
    <!--::review_part end::-->

    <!--::exclusive_item_part start::-->
    @include('frontend.partials.blog_item')
    <!--::exclusive_item_part end::-->
@endsection
