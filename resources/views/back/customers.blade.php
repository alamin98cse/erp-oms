@extends('layouts.admin')
@section('content')

@if(count($customers)>0)
    <table class="table table-bcustomered table-striped table-hover">
      <thead>
        <tr>  <td colspan="7">customers</td> </tr>
      </thead>
          <tbody>
            <tr>
              <th class="text-center">Name</td>
              <th class="text-center">Address</td>
              <th class="text-center">Email</td>
              <th class="text-center">City</td>
              <th class="text-center">State</td>
              <th class="text-center"  width="25">Edit</td>
              <th class="text-center" width="25">Delete</td>
            </tr>
            @foreach($customers as $customer) 
            <tr>
              <td>{{ $customer->name }}</td>
              <td>{{ $customer->address }}</td>
              <td>{{ $customer->email }}</td>
              <td>{{ $customer->city }} </td>
               <td>{{ $customer->state }}</td>
               <td>{!! link_to_route('admin.customer.edit', trans('Edit'), [$customer->id], ['class' => 'btn btn-warning btn-block']) !!}</td>
              <td>
              {!! Form::open(['method' => 'DELETE', 'route' => ['admin.customer.destroy', $customer->id]]) !!}
                 <button type="submit" class="btn btn-danger btn-mini">Delete</button>
                {!! Form::close() !!}
            </tr>
            @endforeach
          </tbody>
         </table>
          {{$customers->render()}}
  @else
   <div class="btn-warning">No customer available</div>
  @endif
@stop