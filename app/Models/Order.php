<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Customer;
use App\Models\Item;

class Order extends Model
{
    protected $table = "Orders";
    protected $fillable = ['custId','total','order_date','status'];
    public function customer()
    {
    	return $this->belongsTo(Customer::class,'custId','id');
    }
    public function item()
    {
    	return $this->hasMany(Item::class,'id','order_id');
    }
}
