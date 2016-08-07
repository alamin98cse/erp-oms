@extends("layouts.admin")

@section('formTitle')
    Update Item 
@endsection

@section("content")
	<div class="container">
	@foreach ($errors->all() as $error) 
	  <div class="alert alert-danger">{{ $error}}</div>
	@endforeach
	<div class="col-lg-12 col-sm-12">
			 {!! Form::model($item, array('route' => array('admin.item.update', $item->id))) !!}
			 <div class="innne_page_midbox">
			
			<div class="row">
			<div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
			{{ Form::label('SKU', 'SKU') }}
			</div>
			<div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
			{{ Form::text('sku',$item->sku) }}
			</div>
			</div>
			<div class="row">
			<div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
			{{ Form::label('item_code', 'Item Code') }}
			</div>
			<div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
			{{ Form::text('item_code',$item->item_code) }}
			</div>
			</div>
			<div class="row">
			<div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
			{{ Form::label('order_id', 'Order Id') }}
			</div>
			<div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
			{{ Form::text('order_id',$item->order_id) }}
			</div>
			</div>
			<div class="row">
			<div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
			{{ Form::label('l_status', 'Logical Status') }}
			</div>
			<div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
			{{ Form::select('l_status',array(''=>'Select Logical Status','Available'=>'Available', 'Assigned'=>'Assigned'),$item->l_status) }}
			</div>
			</div>
			
			<div class="row">
			<div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
			{{ Form::label('p_status', 'Physical Status') }}
			</div>
			<div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
			{{ Form::select('p_status',array(''=>'Select Physical Status','To order'=>'To order', 'In warehouse' => 'In warehouse',
'Delivered'=>'Delivered'),$item->p_status) }}
			</div>
			</div>
			
			 {{ csrf_field() }}
	         {{ method_field('PUT') }}
	 	    <div class="row">
			<div class="col-lg-2 col-md-2 col-sm-2 col-xs-12"></div>
			<div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
			 {{ Form::submit('Update',array('class'=>'btn btn-primary')) }}
			 </div>
			 </div> 
			{!! Form::close() !!}
	</div>
	</div>
	</div>
	   
@stop 