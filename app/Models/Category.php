<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;
use App\models\Product;

class Category extends Model
{
    protected $table = "categories";
    protected $fillable = ['name','description'];
    public function products()
    {
    	return $this->hasMany(Product::class);
    }
}
