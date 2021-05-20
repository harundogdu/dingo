<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function profile()
    {
        $bText = "My Profile";
        return view('frontend.profile.index',compact('bText'));
    }
}
