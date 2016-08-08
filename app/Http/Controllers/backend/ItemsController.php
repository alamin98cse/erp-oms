<?php

namespace App\Http\Controllers\backend;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Item;
use App\Models\Order;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class ItemsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    private $rules = ['sku' => 'required'];

    public function index()
    {
        $items = Item::paginate(15);
        return view('back.items',array('items' => $items));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('back.create-item');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        $validator = Validator::make($request->all(),$this->rules );
        if ($validator->fails()) 
        {
            return back()->withErrors($validator)->withInput();
        }
        /* Create new Item */
        $item = new Item;
        $item->create(array('sku' => $request->sku,
                            'item_code' => $request->item_code,
                            'l_status' => $request->l_status,
                            'p_status' => $request->p_status));
        return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $item = Item::find($id);
        return view('back.edit-item',array('item' => $item));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
       if($request->action && $request->action=='detach')
       {
          $order_id = Item::find($id)->order_id;
          Item::where('id','=',$id)->update(array('order_id' => 0));  
          /*  Change status to Cancelled if all items are detached */
          $OrderItems = Item::where('order_id','=',$order_id)->get();
          if(count($OrderItems)==0)
          {
            Order::where('id','=',$order_id)->update(array('status' => 'Cancelled'));
          }   
          /* ----------- */
          return back();
       }
       else if ($request->action && $request->action=='attach') {
           Item::where('id','=',$id)->update(array('order_id' => $request->order_id)); 
       }
       else
       {
          $validator = Validator::make($request->all(),$this->rules );
          if ($validator->fails() || ($request->p_status=='Delivered' && ($request->order_id==0 || $request->order_id==''))) 
          {
            return back()->withErrors($validator)
                         ->withInput();
          }
          /* update item */
          Item::where('id','=',$id)->update(array('sku' => $request->sku,
                            'item_code' => $request->item_code,
                            'l_status' => $request->l_status,
                            'p_status' => $request->p_status,
                            'order_id' => $request->order_id));
          return redirect('/admin/item');
       }
      
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function update_field(Request $request)
    {
       $row = 1;
       
       if($request->val=='Delivered')
       {
        $row = Item::where('id','=',$request->id)
            ->where('order_id','<>','0')->update(array($request->col => $request->val)); 
       }
       else
       {
        Item::where('id','=',$request->id)->update(array($request->col => $request->val)); 
       }
      
       $item = Item::find($request->id);
       /* Change Item status to delivered and if all items delivered change order status to Completed */
      
       if($item->order_id && $item->p_status =='Delivered')
       { 
          $totalQty = Item::where('order_id','=',$item->order_id)->get();
          $delivered = Item::where('order_id','=',$item->order_id)
                            ->where('p_status','=','Delivered')->get();
          if(count($totalQty)==count($delivered))
          {
            Order::where('id','=',$item->order_id)->update(array('status' => 'Completed'));
          }                  

       }

       /*----------- */
        if($row>0)    
              echo 'Field '.$request->col." updated successfully";
         else
              echo 'Item is not attached with any order!!';       
    }
}
