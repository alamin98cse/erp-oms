@extends('layouts.admin')
@section('content')

@if(count($products)>0)
    <table class="table table-bordered table-striped table-hover">
      <thead>
        <tr>  <td colspan="7">products</td> </tr>
      </thead>
          <tbody>
            <tr>
              <th class="text-center">SKU</td>
              <th class="text-center">Color</td>
              <th class="text-center">Description</td>
              <th class="text-center">Category</td>
              <th class="text-center">Unit Price</td>
              <th class="text-center"  width="25">Edit</td>
              <th class="text-center" width="25">Delete</td>
            </tr>
            @foreach($products as $product) 
            <tr>
              <td>{{ $product->sku }}</td>
              <td>{{ $product->color }}</td>
              <td>{{ $product->description }}</td>
              <td>{{ $product->category()->first()->name }} </td>
               <td>{{ $product->unit_price }}</td>
               <td>{!! link_to_route('admin.product.edit', trans('Edit'), [$product->id], ['class' => 'btn btn-warning btn-block']) !!}</td>
              <td>
              {!! Form::open(['method' => 'DELETE', 'route' => ['admin.product.destroy', $product->id]]) !!}
                 <button type="submit" class="btn btn-danger btn-mini">Delete</button>
                {!! Form::close() !!}
            </tr>
            @endforeach
          </tbody>
         </table>
          {{$products->render()}}
  @else
   <div class="btn-warning">No Product available</div>
  @endif
@stop

@section('scripts')
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js "></script>
 <script type="text/javascript">
    window.url = '<?php echo Config::get('app.url'); ?>';
     $(function(){
            $('input[type=checkbox]').click(function(){ 
                      var id = $(this).attr('id');
                      var url = window.url+"/admin/publish/"+id;
                      if(document.getElementById(id).checked)
                       {
                        var val = 1;
                       } 
                       else
                        var val = 0;
                      alert(val);
                      $.ajax({
                              url:url,
                              data:{id:id,val:val},
                              dataType:'text'
                            }).done(function(data){
                                    alert(data);
                            }).fail(function(){
                               alert("Service Error");
                            });
                      });
      return false;  
    });  
 </script>
@stop
 