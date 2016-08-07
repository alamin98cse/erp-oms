@extends("layouts.admin")
@section('formTitle')
 New Category Entry
@endsection
@section("content")
	<div class="container">
	@foreach ($errors->all() as $error) 
	  <div class="alert alert-danger">{{ $error}}</div>
	@endforeach
	<div class="col-lg-12 col-sm-12">
			 {!! Form::open(array('url' => 'admin/category')) !!}
			 <div class="innne_page_midbox">
			<div class="row">
			<div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
			{{ Form::label('name', 'Name') }}
			</div>
			<div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
			{{ Form::text('name') }}
			</div>
			</div>
			<div class="row">
			<div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
			{{ Form::label('description', 'Description') }}
			</div>
			<div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
			{{ Form::text('description') }}
			</div>
			</div>
			  {{ csrf_field() }}
	
	 	    <div class="row">
			<div class="col-lg-2 col-md-2 col-sm-2 col-xs-12"></div>
			<div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
			 {{ Form::submit('Save',array('class'=>'btn btn-primary')) }}
			 </div>
			 </div> 
			{!! Form::close() !!}
	</div>
	</div>
</div>	
	   
@stop 