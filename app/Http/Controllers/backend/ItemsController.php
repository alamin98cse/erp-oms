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
            return back()->withErrors($validator)
                         ->withInput();
          }
        $item = new Item;
        $item->create(array('sku' => $request->input('sku'),
                            'item_code' => $request->input('item_code'),
                            'l_status' => $request->input('l_status'),
                            'p_status' => $request->input('p_status')));
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
       if($request->input('action') && $request->input('action')=='detach')
       {
         
          Item::where('id','=',$id)->update(array('order_id' => 0));  echo "Success";
       }
       else if ($request->input('action') && $request->input('action')=='attach') {
           Item::where('id','=',$id)->update(array('order_id' => $request->input('order_id'))); 
       }
       else
       {
          $validator = Validator::make($request->all(),$this->rules );
          if ($validator->fails()) 
          {
            return back()->withErrors($validator)
                         ->withInput();
          }

          Item::where('id','=',$id)->update(array('sku' => $request->input('sku'),
                            'item_code' => $request->input('item_code'),
                            'l_status' => $request->input('l_status'),
                            'p_status' => $request->input('p_status'),
                            'order_id' => $request->input('order_id')));
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
       Item::where('id','=',$request->id)->update(array($request->col => $request->val));
       $item = Item::find($request->id);
       $order_id = $item->order()->first()->id;
       if($order_id && $item->p_status =='Delivered')
       { 
          $totalQty = Item::where('order_id','=',$order_id)->get();
          $delivered = Item::where('order_id','=',$order_id)
                            ->where('p_status','=','Delivered')->get();
          if(count($totalQty)==count($delivered))
          {
            Order::where('id','=',$order_id)->update(array('status' => 'Completed'));
          }                  

       }
              echo 'Field '.$request->col." updated successfully";
    }
}
