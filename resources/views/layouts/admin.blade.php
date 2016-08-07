 <?php
 use App\Http\Util\Menu;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>ERP </title>
 
 <link href="{{asset('css/app.css')}}" rel="stylesheet">
  
    <link href="{{asset('css/bootstrap.min.css')}}" rel="stylesheet">
    <!-- Custom CSS -->
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
    <!-- Navigation -->
<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
   <div class="container">
            <ul class="nav navbar-nav" style="float: right;">
                   @if(Auth::check())
                
                    <li><a href="/account"><span>WELCOME BACK,</span> <?php echo Auth::user()->usrName; ?> </a></li>
                   
                    <li class="help"><a   href="/user/help">HELP</a></li>
               
                    <li class="logout"><a href="/logout">LOGOUT</a></li>
                
                @endif
            </ul>
      
            <!-- /.navbar-collapse -->
    </div>
       
</nav>

<div class="row" style="margin-top:60px;min-height:550px;">
 <div class="col-lg-2">
   @include('layouts.partials.leftnav')
 </div>
 <div class="col-lg-10">  
<div class="container">
   <div class="row">

 <div class="box-inner">
            <div class="box-header well" style="padding:3px;">
                <h2><i class="glyphicon glyphicon-info-sign"></i> @yield('formTitle')</h2>              
            </div>            
                    @yield('content')                
        </div>
              
    </div>
        <!-- /.row -->
  </div>   
</div>
</div>

    <hr>
    <!-- Footer -->
    
<div id="footer">
      
        <div class="row">
            <div class="col-lg-12">
                <p align='center' style="color:white;margin-top:10px;">Copyright &copy; Your Website 2016</p>
            </div>
                <!-- /.col-lg-12 -->
        </div>
            <!-- /.row -->
    
    </div>

      <!-- jQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js "></script>

<script type="text/javascript">
    window.url = '<?php echo Config::get('app.url'); ?>';
</script>    
<script src="{{asset('js/jquery.js')}}"></script>

<script src="{{asset('js/app1.js')}}"></script>
  <!-- Bootstrap Core JavaScript -->
<script src="{{asset('js/bootstrap.min.js')}}"></script>
      @yield('scripts')
<script type="text/javascript">
    $(document).ready(function() {
    $('a[href="' + this.location.pathname + '"]').parent().addClass('active');
    $('a[href="' + this.location.pathname + '"]').parent().parent().parent().addClass('active open');
    $('.view-order').click(function(e){
        e.preventDefault();
        var id = $(this).data('id');
        var url = window.url+'/admin/order/'+id;
        
       $.ajax({
        url:url,
        dataType:'text',
        type:'GET',
        data:{id:id}
       }).done(function(data){
        $('.modal-body').html(data);
        $('.show-order').click();
       });
    });
});

</script>      
</body>
</html>