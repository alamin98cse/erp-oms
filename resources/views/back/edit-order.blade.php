@extends('layouts.admin')
@section('formTitle')
Order <h3 class="pull-right" style="margin-top:0px;"># {{ $order->id }}</h3>
@endsection
@section('content')
 
@if(count($order)>0)
    <div class="row">
       <div class="col-xs-12">
    	  	<div class="invoice-title"></div>
    		  <hr>
    		  <div class="row">
    			   <div class="col-xs-6">
    				    <address>
        			     <strong>Shipped To:</strong><br>
            					{{ $order->customer()->first()->name }}<br>
            					{{ $order->customer()->first()->address }}<br>
            					{{ $order->customer()->first()->city }}<br>
            					{{ $order->customer()->first()->state }} , {{ $order->customer()->first()->zip }}
            		</address>
    			   </div>
    			   <div class="col-xs-6 text-right">
    			        <span>Order Date:</span> {{ $order->order_date }} <br>
      		        <span>Order Total:</span> ${{ $order->total }} <br>
      		        <span>Status:</span> {{ $order->status}}
      		   </div>
    		  </div>
  </div>
  </div>
       
  @endif

@if(count($items)>0)
	<div class="panel-heading">
    				<h3 class="panel-title"><strong>Order summary</strong></h3>
    			</div>
    			<div class="panel-body">
    				<div class="table-responsive">

    <table class="table table-bordered table-striped table-hover">
      <thead>
        <tr>  <td colspan="7">Items</td> </tr>
      </thead>
          <tbody>
            <tr>
              <th class="text-center">SKU</td>
              <th class="text-center">Item Code</td>
              <th class="text-center">Logical Status</td>
              <th class="text-center">Physical Status</td>
              <th class="text-center">Color</td>
              <th class="text-center">Description</td>
              <th class="text-center" width="25">Action</td>
            </tr>
            @foreach($items as $item) 
            <tr>
              <td>{{ $item->sku }}</td>
              <td>{{ $item->item_code }}</td>
              <td class="l_status" data-id="{{$item->id}}">{{ $item->l_status }}</td>
              <td class="p_status" data-id="{{$item->id}}">{{ $item->p_status }} </td>
              <td >{{ $item->product()->first()->color }}</td>
               <td> {{ $item->product()->first()->description}}</td>
              <td>
              {!! Form::open(['method' => 'PUT', 'route' => ['admin.item.update', $item->id]]) !!}
               <input type="hidden" name="action" value="detach"/>
                 <button type="submit" class="btn btn-danger btn-mini">Remove</button>
                {!! Form::close() !!}
                </td>
            </tr>
            @endforeach
          </tbody>
         </table>
        </div>
        </div>

   @endif
 
@stop