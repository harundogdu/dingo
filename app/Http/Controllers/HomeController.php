<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('frontend.index');
    }
    public function about(){
        return view('frontend.pages.about');
    }
    public function menu(){
        return view('frontend.pages.menu');
    }
    public function chefs(){
        return view('frontend.pages.chefs');
    }
    public function contact(){
        return view('frontend.pages.contact');
    }
    public function blog(){
        return view('frontend.pages.blog');
    }
}
