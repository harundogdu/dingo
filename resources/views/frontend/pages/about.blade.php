@extends('frontend.layouts.master')
@section('navClass','')
@section('btnTop', 'single_page_btn')
@section('content')
    <section class="breadcrumb breadcrumb_bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb_iner text-center">
                        <div class="breadcrumb_iner_item">
                            <h2>About Us</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
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
