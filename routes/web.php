<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function(){
    return view('welcome');
});


Route::get('/login', [LoginController::class, 'showLoginForm'])->name('auth');
Route::post('/login', [LoginController::class, 'login'])->name('login');
Route::post('/logout',  [LoginController::class, 'logout'])->name('logout');


Route::group(['middleware' => 'role:Student'], function () {
    Route::get('/student', function(){
        return view('pages.student');
    });
});

Route::group(['middleware' => 'role:Organization'], function () {
    Route::get('/organization', function(){
        return view('pages.organization');
    });
    Route::get('/organization/practicants', function(){
        return view('pages.practicants');
    });
});

Route::group(['middleware' => 'role:Admin'], function () {
    Route::get('/admin', function(){
        return view('pages.admin');
    });
});
