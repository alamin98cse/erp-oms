<?php

namespace App\Http\Controllers\backend;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Category;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Models\Product;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    private $rules = ['sku' => 'required|unique:Products'];

    public function index()
    {

        $products = Product::paginate(15);
        return view('back.products',array('products' => $products));  
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
         $cat = get_object_vars(json_decode(Category::lists('name','id')));
     //    print_r($cat);
      //   exit();
         return view('back.create-product',array("cat" => $cat));
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
         $product = new Product;
         $product->create(array('sku' => $request->sku,
                                'color' => $request->color,
                                'description' => $request->description,
                                'catId' => $request->catId,
                                'unit_price' => $request->unit_price));
        // $cat = get_object_vars(json_decode(Category::lists('name','id')));
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
        $product = Product::find($id);
        $cat = get_object_vars(json_decode(Category::lists('name','id')));
        return view('back.edit-product',array('product' => $product,'cat' => $cat));
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
        $validator = Validator::make($request->all(),$this->rules );
          if ($validator->fails()) 
          {
            return back()->withErrors($validator)
                         ->withInput();
          }
        Product::where('id','=',$id)
                 ->update(array('sku' => $request->sku,
                                'color' => $request->color,
                                'description' => $request->description,
                                'catId' => $request->catId,
                                'unit_price' => $request->unit_price));
        // $cat = get_object_vars(json_decode(Category::lists('name','id')));
         return redirect('/admin/product');
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
}
