<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Order;
use App\Models\Product;

class Item extends Model
{
    protected $table = "items";
    protected $fillable = ['sku','item_code','l_status','p_status','order_id']; 
    public function order()
    {
    	return $this->belongsTo(Order::class,'order_id','id');
    }
    public function product()
    {
      return $this->belongsTo(Product::class,'sku','sku');	
    }
}
