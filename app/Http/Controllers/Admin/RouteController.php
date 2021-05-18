<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Spatie\Permission\Models\Role;

class RouteController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $defaultSystemVars = getVar('system');
        $roles = Role::all()->pluck('name')->all();
        $routes = Route::getRoutes();
        return view('admin.routes.index', compact('routes'));
    }
}
