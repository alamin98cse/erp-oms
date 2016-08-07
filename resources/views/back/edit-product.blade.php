@extends("layouts.admin")

@section('formTitle')
    New Product Entry 
@endsection

@section("content")
	<div class="container">
	@foreach ($errors->all() as $error) 
	  <div class="alert alert-danger">{{ $error}}</div>
	@endforeach
	<div class="col-lg-12 col-sm-12">
	         {!! Form::model($product, array('route' => array('admin.product.update', $product->id))) !!}
			 <div class="innne_page_midbox">
			
			<div class="row">
			<div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
			{{ Form::label('SKU', 'SKU') }}
			</div>
			<div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
			{{ Form::text('sku',$product->sku) }}
			</div>
			</div>
			<div class="row">
			<div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
			{{ Form::label('Color', 'Color') }}
			</div>
			<div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
			{{ Form::text('color',$product->color) }}
			</div>
			</div>
			<div class="row">
			<div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
			{{ Form::label('Description', 'description') }}
			</div>
			<div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
			{{ Form::text('description',$product->description) }}
			</div>
			</div>
			
			<div class="row">
			<div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
			{{ Form::label('unit_price', 'Unit Price') }}
			</div>
			<div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
			{{ Form::text('unit_price',$product->unit_price) }}
			</div>
			</div>
			
			<div class="row">
			<div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">{{ Form::label('catId', 'Category') }}</div>
			<div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
			 	
				{{ Form::select('catId',array(''=>'Select Category')+$cat,$product->catId) }}
				
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