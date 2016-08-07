<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Category;

class Product extends Model
{
     protected $table = "products";
     protected $fillable = ['sku','color','description','catId','unit_price'];

     public function category()
     {
     	return $this->belongsTo(Category::class,'catId','id');
     }
}
