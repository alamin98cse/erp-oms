<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Order;

class Customer extends Model
{
   protected $table = "Customers";

   public function order()
   {
       return $this->hasMany(Order::class,'id','custId');
   }
}
