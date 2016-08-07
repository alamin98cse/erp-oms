<?php

namespace App\Http\Controllers\frontend;

use Illuminate\Http\Request;
use App\Models\Customer;
use App\Models\Order;
use App\Models\Item;
use App\Models\Product;
use App\Models\OrderDetail;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Carbon\Carbon;

class SaleController extends Controller
{
   

   public function order()
   { 
   	  $rawOrders = file_get_contents('order.json');
      $orderList = json_decode($rawOrders);
      foreach($orderList[0]->order as $order)
       {  

      $customer = Customer::where("email","=","$order->email")->get();
      
      if(count($customer)>0){
          $fill = array("name" => $order->customer,
          	             "address" => $order->address,
          	             "city" => $order->city,
          	             "state" => $order->state,
          	             "zip" => $order->zip);
          $cust_id = $customer[0]->id;
           Customer::where("email","=","$order->email")->update($fill); 	               
      } else {
      	  $cust_id = Customer::insertGetId(array("name" => $order->customer,
      	  	                                     "address" => $order->address,
      	  	                                     "email" => $order->email,
      	  	                                     "city" => $order->city,
      	  	                                     "state" => $order->state,
      	  	                                     "zip" => $order->zip
      	  	                                     ));
      }
      $order_id = Order::insertGetId(array("custId" => $cust_id,
      	                                   "total" => $order->total,
      	                                   "status" => "In Progress",
      	                                   "order_date" => Carbon::now()));
      foreach($order->items as $item)
      {
            
          for($i=1;$i<=$item->quantity;$i++)
          {
            OrderDetail::insertGetId(array("sku" => $item->sku,
                                   "order_id" => $order_id
                                   ));
            $itemInStock = Item::where('sku','=',$item->sku)
                               ->where('l_status','=','Assigned')
                               ->where('p_status','=','In warehouse')
                               ->get();
            if(count($itemInStock)>0)
            {
              $itemInStock[0]->update(array('order_id' => $order_id,
                                            'p_status' => 'Delivered'));
            }
            else
            {
              $product = Product::where('sku' ,'=', "$item->sku")->get();
              if(count($product)==0)
              {
                
                $product = Product::insertGetId(array('sku' => $item->sku,
                                'color' => '',
                                'description' => '',
                                'catId' => 1,
                                'unit_price' => ''));

                $subject = 'A new product created!!';
                $to = array('alamin16au@gmail.com',);
		        try{
		        	$url = getenv(APP_URL).'/admin/product/'.$product.'/edit';
		            Mail::send('emails.new-product', array('url'=>$url,'messageContent' => $message), function($message) use($to, $subject){
		              $address = [];
		              foreach($to as $email){
		                if($email != ''){
		                  $message->to($to)->subject($subject);
		                  $address[] = $email;
		                }
		              }
		            });
	           
		        }catch(Exception $e){
		           
		        }
              }
              $itemToOrder = New Item;
              $itemToOrder->create(array('sku' => $item->sku,
                            'item_code' => '',
                            'l_status' => 'Assigned',
                            'p_status' => 'To order',
                            'order_id' => $order_id));
            }                                              
          }
          
      } 
    }
   	 
   }
}
