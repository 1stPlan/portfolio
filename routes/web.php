<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\HeadlessCmsController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('/home'); 
});

Route::get('/{any}', function(){
    return view('app');
})->where('any', '.*'); //補足：.*は、正規表現で0文字以上の任意の文字列を意味する


Route::get('/user/test', [TestController::class, 'index']);

// Auth::routes();

Route::controller(HeadlessCmsController::class)->group(function(){
    Route::get('headless_cms', 'index')->name('headless_cms.index');
});
