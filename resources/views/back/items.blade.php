@extends('layouts.admin')
@section('content')

@if(count($items)>0)
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
              <th class="text-center">Order Number</td>
              <th class="text-center"  width="25">Edit</td>
              <th class="text-center" width="25">Delete</td>
            </tr>
            @foreach($items as $item) 
            <tr>
              <td>{{ $item->sku }}</td>
              <td>{{ $item->item_code }}</td>
              <td class="l_status" data-id="{{$item->id}}">{{ $item->l_status }}</td>
              <td class="p_status" data-id="{{$item->id}}">{{ $item->p_status }} </td>
              <td >{{ $item->order_id }}</td>
               <td>{!! link_to_route('admin.item.edit', trans('Edit'), [$item->id], ['class' => 'btn btn-warning btn-block']) !!}</td>
              <td>
              {!! Form::open(['method' => 'DELETE', 'route' => ['admin.item.destroy', $item->id]]) !!}
                 <button type="submit" class="btn btn-danger btn-mini">Delete</button>
                {!! Form::close() !!}
            </tr>
            @endforeach
          </tbody>
         </table>
          {{$items->render()}}
  @else
   <div class="btn-warning">No item available</div>
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
 