<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::namespace('Api')
      ->prefix('posts')
      ->group(function(){ 
        Route::get('/', 'PageController@index');
        Route::get('/{slug}', 'PageController@show');
        Route::get('/post-tag/{slug}', 'PageController@getPostsByTag');
        Route::get('/post-category/{slug}', 'PageController@getPostsByCategory');
        });