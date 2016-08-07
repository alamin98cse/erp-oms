@extends('layouts.admin')
@section('formTitle')
All Categories
@endsection
@section('content')

@if(count($categories)>0)
    <table class="table table-bcategorieed table-striped table-hover">
      <thead>
        <tr>  <td colspan="4">categories</td> </tr>
      </thead>
          <tbody>
            <tr>
              <th class="text-center">Name</td>
              <th class="text-center">Description</td>
              <th class="text-center"  width="25">Edit</td>
              <th class="text-center" width="25">Delete</td>
            </tr>
            @foreach($categories as $category) 
            <tr>
              <td>{{ $category->name }}</td>
              <td>{{ $category->description }}</td>
             
               <td>{!! link_to_route('admin.category.edit', trans('Edit'), [$category->id], ['class' => 'btn btn-warning btn-block']) !!}</td>
              <td>
              {!! Form::open(['method' => 'DELETE', 'route' => ['admin.category.destroy', $category->id]]) !!}
                 <button type="submit" class="btn btn-danger btn-mini">Delete</button>
                {!! Form::close() !!}
             </td>   
            </tr>
            @endforeach
          </tbody>
         </table>
          {{$categories->render()}}
  @else
   <div class="btn-warning">No categorie available</div>
  @endif
@stop