<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/scraping', 'App\Http\Controllers\API\ScrapingController@scrape');

Route::get('/post/role', 'App\Http\Controllers\API\PostController@role');
Route::get('/post/category', 'App\Http\Controllers\API\PostController@category');
Route::post('/post/create', 'App\Http\Controllers\API\PostController@create');
Route::get('/post/list', 'App\Http\Controllers\API\PostController@list');
Route::get('/post/get/{id}', 'App\Http\Controllers\API\PostController@get');
// Route::put('/post/update/{id}', 'App\Http\Controllers\API\PostController@update');
Route::delete('/post/delete/{id}', 'App\Http\Controllers\API\PostController@delete');