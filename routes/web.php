<?php

use Illuminate\Support\Facades\Route;

Route::get('/test', 'TestController@index');

Route::group(['middleware' => 'guest'], function () {
    Route::resource('/install', 'InstallController');
});

Auth::routes();

/* Frontend routes */

Route::get('/', 'HomeController@index')->name('home');
Route::get('/about','HomeController@about')->name('about');
Route::get('/menu','HomeController@menu')->name('menu');
Route::get('/chefs','HomeController@chefs')->name('chefs');
Route::get('/contact','HomeController@contact')->name('contact');
Route::get('/blog','HomeController@blog')->name('blog');

/* admin routes */

Route::namespace('Admin')->prefix('admin')->middleware(['auth'])->name('admin.')->group(function () {
    Route::get('/', 'AdminController@index')->name('dashboard');
    Route::get('/routes', 'RouteController@index')->name('routes');
});
