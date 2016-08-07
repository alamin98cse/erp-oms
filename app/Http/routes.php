<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/


Route::auth();

Route::get('order', 'frontend\SaleController@order');
//Route::group(array('middleware' => 'auth'), function(){
Route::resource('admin/order','backend\OrdersController');
//Route::get('admin/products', 'backend\ProductsController@index');
Route::resource('admin/product', 'ProductsController');
Route::resource('admin/category', 'backend\CategoriesController');
Route::resource('admin/item', 'backend\ItemsController');
Route::resource('admin/customer', 'backend\CustomersController');
Route::get('admin/item_update','backend\ItemsController@update_field');
//});