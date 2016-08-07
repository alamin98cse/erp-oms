
$(document).ready(function () {
 
$('.p_status').click(function(e){
    e.preventDefault();
    var id = $(this).data('id')
    var pstatus ="<select class='pstatus' id='p_status_"+id+"' data-id='"+id+"' name='p_status"+id+"'><option value=''>Select Physical Status</option><option value='To order'>To order</option><option value='In warehouse'>In warehouse</option><option value='Delivered'>Delivered</option></select>";
   
   if($('#p_status_'+id).length)
   {
        /* do nothing */  
   }
   else
   {
     $(this).html(pstatus);  
   }
  
});
$('.l_status').click(function(e){
    e.preventDefault();
    var id = $(this).data('id')
    var lstatus ="<select class='lstatus' id='l_status_"+id+"' data-id='"+id+"' name='l_status"+id+"'><option value=''>Select Physical Status</option><option value='Available'>Available</option><option value='Assigned'>Assigned</option><option value='Delivered'>Delivered</option></select>";
   
   if($('#l_status_'+id).length)
   {
       /* do nothing */
   }
   else
   {
     $(this).html(lstatus);  
   }
  
});

});
     
    $( document ).on('change', '.pstatus', {}, function(e) {
    var id = $(this).data('id');
    var state = $(this).val();
    item_update(id,state,'p_status');    
    });
   $( document ).on('change', '.lstatus', {}, function(e) {
    var id = $(this).data('id');
    var state = $(this).val();
    item_update(id,state,'l_status');    
    });

   function item_update(id,val,col){
    var url = window.url+"/admin/item_update";
    $.ajax({
      url:url,
      dataType:'text',
      type:'GET',
      data:{id:id,val:val,col:col}
    }).done(function(data){
      alert(data);
    }).fail(function(){
        alert("service failed");
    });

   }
