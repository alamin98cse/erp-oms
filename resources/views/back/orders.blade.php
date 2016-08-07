@extends('layouts.admin')
@section('content')

@if(count($orders)>0)
    <table class="table table-bordered table-striped table-hover">
      <thead>
        <tr>  <td colspan="6">orders</td> </tr>
      </thead>
          <tbody>
            <tr>
              <th class="text-center">Order Number</td>
              <th class="text-center">Customer</td>
              <th class="text-center">Order Total</td>
              <th class="text-center">Order Date</td>
              <th class="text-center">Status</td>
              <th class="text-center"  width="60">Action</td>
              
            </tr>
            @foreach($orders as $order) 
            <tr>
              <td>{{ $order->id }}</td>
              <td>{{ $order->customer()->first()->name }}</td>
              <td>{{ $order->total }}</td>
              <td>{{ $order->order_date }} </td>
               <td>{{ $order->status }}</td>
               <td>

               <a class="btn btn-success" href="#">
                <i class="glyphicon glyphicon-zoom-in icon-white"></i>
                View
            </a>
            <a class="btn btn-info" href="/admin/order/{{$order->id}}/edit">
                <i class='glyphicon glyphicon-edit icon-white'></i>Edit
            </a>
            
                
                {!! Form::open(['method' => 'DELETE', 'route' => ['admin.order.destroy', $order->id]]) !!}
                 <button type="submit" class="btn btn-danger btn-mini"><i class="glyphicon glyphicon-trash icon-white"></i>Delete</button>
                {!! Form::close() !!}
            </td>
              
                
                
            </tr>
            @endforeach
          </tbody>
         </table>
          {{$orders->render()}}
  @else
   <div class="btn-warning">No order available</div>
  @endif

  <!-- Button trigger modal -->
<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
      </div>
      <div class="modal-body">
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
<script type="text/javascript">
  
</script>
@stop