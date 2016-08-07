@extends("layouts.admin")

@section('formTitle')
    Update Customer Record 
@endsection

@section("content")
	<div class="container">
	@foreach ($errors->all() as $error) 
	  <div class="alert alert-danger">{{ $error}}</div>
	@endforeach
	<div class="col-lg-12 col-sm-12">
	         {!! Form::model($customer, array('route' => array('admin.customer.update', $customer->id))) !!}
			 <div class="innne_page_midbox">
			
			<div class="row">
			<div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
			{{ Form::label('name', 'Name') }}
			</div>
			<div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
			{{ Form::text('name',$customer->name) }}
			</div>
			</div>
			<div class="row">
			<div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
			{{ Form::label('address', 'Address') }}
			</div>
			<div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
			{{ Form::text('address',$customer->address) }}
			</div>
			</div>
			<div class="row">
			<div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
			{{ Form::label('city', 'City') }}
			</div>
			<div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
			{{ Form::text('city',$customer->city) }}
			</div>
			</div>
			
			<div class="row">
			<div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
			{{ Form::label('state', 'State') }}
			</div>
			<div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
			{{ Form::text('state',$customer->state) }}
			</div>
			</div>
			<div class="row">
			<div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
			{{ Form::label('zip', 'Zip') }}
			</div>
			<div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
			{{ Form::text('zip',$customer->zip) }}
			</div>
			</div>
			<div class="row">
			<div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
			{{ Form::label('email', 'Email') }}
			</div>
			<div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
			{{ Form::text('email',$customer->email) }}
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