<?php

use Illuminate\Support\Facades\Route;

Route::get('/test', 'TestController@index');

Route::group(['middleware' => 'guest'], function () {
    Route::resource('/install', 'InstallController');
});

Auth::routes();

/* Frontend routes */
Route::get('/profile', 'Front\UserController@profile')->name('profile');
Route::get('/', 'HomeController@index')->name('home');
Route::resource('/about', 'Front\AboutController');
Route::resource('/menu','Front\MenuController');
Route::resource('/chefs','Front\ChefsController');
Route::resource('/contact','Front\ContactController');
Route::resource('/blog','Front\BlogController');

/* admin routes */

Route::namespace('Admin')->prefix('admin')->middleware(['auth'])->name('admin.')->group(function () {
    Route::get('/', 'AdminController@index')->name('dashboard');
    Route::get('/routes', 'RouteController@index')->name('routes');
});
