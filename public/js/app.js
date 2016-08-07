/* Modernizr 2.7.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-input-touch-shiv-cssclasses-teststyles-hasevent-prefixes-load
 */
;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(m.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function C(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)p[c[d]]=c[d]in k;return p.list&&(p.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),p}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "))}var d="2.7.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n={},o={},p={},q=[],r=q.slice,s,t=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},u=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=z(e[d],"function"),z(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=r.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(r.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(r.call(arguments)))};return e}),n.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:t(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c};for(var D in n)w(n,D)&&(s=D.toLowerCase(),e[s]=n[D](),q.push((e[s]?"":"no-")+s));return e.input||C(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},x(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=m,e.hasEvent=u,e.testStyles=t,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+q.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

;// Modernizr IE version test
// Jon Suderman 2013
(function(){

  // https://gist.github.com/padolsey/527683#comment-786682
  var ie = (function(){

    // for-loop saves characters over while
    for( var v = 3,

          // b just as good as a div with 2 fewer characters
          el = document.createElement('b'),

          // el.all instead of el.getElementsByTagName('i')
          // empty array as loop breaker (and exception-avoider) for non-IE and IE10+
          all = el.all || [];

        // i tag not well-formed since we know that IE5-IE9 won't mind
        el.innerHTML = '<!--[if gt IE ' + (++v) + ']><i><![endif]-->',
        all[0];
      );

    // instead of undefined, returns the documentMode for IE10+ compatibility
    // non-IE will still get undefined as before
    return v > 4 ? v : document.documentMode;

  }());

  // Check if ie version has been detected
  if (typeof ie !== 'undefined') {

    // Add ie classes to html element
    document.documentElement.className += ' ie ie' + ie;

    // Assign ie to Modernizr if available
    if (typeof Modernizr !== 'undefined') {
      Modernizr.ie = ie;
    }

    // Otherwise, assign ie to the window
    else {
      window.ie = ie;
    }

  }

})();


;(function ($, window, undefined) {
  'use strict';

   // $(document).foundation();
    
    $(document).foundation({joyride: {tip_container: ".tour-wrapper"}});
    

    var planner_data = {recid:false,date:false,slot:false};
    window.planner_data = planner_data;

    function search(url,selector){
        $.ajax({url: url}).done(function(data) {
            $('#results:not(.animated)').addClass('animated');

            if($('#results').length){
              $('#results').removeClass('fadeInDown fadeOut fadeOutUp').addClass('animated fadeInDown');
              $('#results').html(data);
            }

            $(selector).html(data);
        });
    }

    // window.send_user_feedback = function(){
        // var url = window.url+'/user/feedback/';

       // var subject = $('#subject').val();
        // var comment = $('#copy').val();
        //var data = {subject:subject,comment:comment};

       // $.ajax({url: url,type:'POST',data:data}).done(function(data) {

           //console.log(data);

            //try{
             // var obj = JSON.parse(data);
           // }catch(err){
              //console.log(err);
              //console.log(data);
           // }

           // var msg = '';
            //if(obj.success){
             // msg = 'Thank you for your feedback';
             // $('#subject').val('');
             // $('#copy').val('');
            //  $('#sidebar .flash-message').remove();
           // }else{

            //  for(var prop in obj) {
             //    msg +=obj[prop]+'<br>';
            //  }


           // }

          //  var flash = makeFlashMessage(msg ,'.feedback',10000);
        //});
    //}

    window.updateservings_shopping_cb = function(recid,data){
      //console.log('updateservings_shopping_cb'+ recid);
      var el = $('a[data-recid="'+recid+'"]','.shopping-recipe');
      el.trigger('click');
      shoppingList(true);
    }

    window.updateservings_recipe_cb = function(recid,data){
      //console.log('updateservings_recipe_cb');
      getRecipeTabs(recid,'.recipe-tabs');
    }

    window.updateservings = function(recid,amount,cb){

      $('.recipe-servings').html(amount);

      var url = window.url+'/shopping/updateservings/'+recid+'/'+amount;
      $.ajax({url: url,type:'GET',data:{}}).done(function(data) {
            if(typeof cb == 'function'){
              cb.call(this, recid,data);
            }
      });

    };

    window.sendmail = function(url,to){   
      var send_to=to.trim();
      $.ajax({url: url,type:'POST',data:{to:send_to}}).done(function(data) {
          console.log(data);
      });
    };

    window.getRecipe = function(recid,el){
      var url = window.url+'/recipe/'+recid+'?partial=recipe.single-recipe';
      $.ajax({url: url,type:'GET',data:{}}).done(function(data) {
            if(typeof cb == 'function'){
              cb.call(this, recid,data);
            }else{
              $(el).html(data);
            }
      });
    }

    window.getMultipleRecipes = function(recids,el){

      var url = window.url+'/recipe/multiple/'+recids;
      console.log(url);
      $.ajax({url: url,type:'GET',dataType:"html"}).done(function(data) {
            console.log(data);

      });
    }

   /*
    window.getRecipeTabs = function(recid,el){
      var url = window.url+'/recipe/'+recid+'?partial=recipe.single-recipe-tabs';
      $.ajax({url: url,type:'GET',data:{}}).done(function(data) {
            if(typeof cb == 'function'){
              cb.call(this, recid,data);
            }else{
              $(el).html(data);
            }
      });
    }*/
    /* ----------- By Niaz ----------- */
   window.getRecipeTabs = function(recid,el){
      var url = window.url+'/recipe/'+recid+'?partial=recipe.single-recipe-tabs';
      $.ajax({url: url,type:'GET',data:{}}).done(function(data) {
            if(typeof cb == 'function'){
              console.log(cb);
              cb.call(this, recid,data);
            }else{
              $(el).html(data);
            }

            setTimeout(function(){
                $(".update-servings-modal").off();
                  $(".update-servings-modal").on('click',function(event){
                  
                    event.preventDefault();
                    console.log('clicked');
                    $('#adjust-servings').foundation('reveal','open'); <!-- here1 -->
                    
                  });
              },1000);
            
      });
    }
    /* ------------------- */

    window.getIngredients = function(recid,el){       
      var url = window.url+'/recipe/'+recid+'?partial=shopping.partials.single';
      $.ajax({url: url}).done(function(data) {
          var output = data;
          $(el).html(output);
      });
    };


    function randID(){
      var d = new Date();
      var id = 'div_'+d.getTime()+Math.floor(Math.random()*d.getTime());
      return id;
    }

    function makeFlashMessage(msg,el,ms){

      ms = ms || 2000;

      var id = randID();
      var div = '<div id="'+id+'"class="flash-message animated fadeInDown">'+msg+'</div>';

      var flash = {id:id,el:div};

      $(el).prepend(div);
      setTimeout(function() {
              $('#'+flash.id).fadeOut();
              return false;
            }, ms);

      return flash;
    }


    window.addIngredient = function(url,el){
      //shopping/add/ingredient/298095/30220
      $.ajax({url: url,type:'GET'}).done(function(data) {
          //console.log(data);
          if(el){
            var flash = makeFlashMessage(data,el)
          }
      });
    };

    window.removeIngredient = function(url,el){
    	//alert(url);
    	//alert(el);
      //shopping/remove/ingredient/57130,30220
      $("#consolidated-list").block({
       message: '<span>Removing Ingredient...</span>'
     });
      $.ajax({url: url,type:'GET'}).done(function(data) {
      	

          if(el){
            var flash = makeFlashMessage(data,el);
          }
       $("#consolidated-list").unblock();       
      });
    };

    window.shoppingList = function(consolidated){

      var consolidated_only = '';

      if(typeof consolidated != "undefined" && consolidated){
        consolidated_only ='?consolidated=true';
      }

      var url = window.url+'/shopping'+consolidated_only;
      $.ajax({url: url,cache:false,type:'GET',dataType:"html"}).done(function(data) {
      	
          if(consolidated){
            $('#consolidated-list').html(data);
          }else{
            $('.shopping-list-results').html(data);
          }
      });
    }

    $('#share-modal input.submit').click(function() {
      event.preventDefault();

      var dataID = $('#share-modal form').attr('data-id');
      var dataType = $('#share-modal form').attr('data-type');
     // var dataEmails = $('#share-modal form input[name="share-modal"]').val();
       var dataEmails = $('#share-form input[name="to"]').val();
       
      if(dataType == 'recipe') {
        sendmail('/recipe/email/'+dataID,dataEmails);
      } else {
        sendmail('/shopping/share/',dataEmails);
      
      }

      if (dataType != '') {
        $(this).attr('disabled','disabled');
        $('#share-modal .reset').hide();
        $(this).attr('value','SENT');
        $(this).css('width','100%');

        setTimeout(function() {
          $('.close-reveal-modal').trigger('click');
        }, 1500);

        setTimeout(function() {
            window.location.href = window.location.pathname;
              }, 1000);
      }
    });

    function favorites(){
      $('#results:not(.animated)').addClass('animated');
      var url = window.url+'/favorites';
      $.ajax({url: url}).done(function(data) {$('.favorites-result').html(data);});
    }

    window.myrecipes = function(){
      var url = window.url+'/myrecipes';
      $.ajax({url: url}).done(function(data) {$('.myrecipes-result').html(data);});
      $('.tooltip').hide();
      $('#results').removeClass('fadeOutUp').addClass('fadeInDown');
    }


    //planner
    function planner(){

      if($('#agenda').length){

        if(!start_date){
            start_date = '';
        }
        var sel=$("input[name='radiog_lite']:checked").val();       
        var url = '/planner/'+sel+'/'+start_date+'?cal_type='+sel;
        $.ajax({url: url}).done(function(data) {
          //   alert("sel");
          $('#agenda').html(data);
         
          makeFlashMessage('Added To Planner','.feedback-results');
        });
      }else{
        //not on planner page
        makeFlashMessage('Added To Planner','.feedback-results');
        //$('#results').before('<div class="flash-message">Added To Planner</div>');
      }
    }

    function clearSearch(){
       $('#mm-submit').val('Search').removeClass('cancel');
       $('#results').html('');
    }

    $(document).ready(function() {
      $( document ).on('click', '#all-submit', {}, function(e) {
            e.preventDefault();
            var q = $("input[name='q']",'#findrecipes').val();
             var product = $('#mm-product').val();
            var productTag = $('.mm-week').val();
            var c=$('.recipe-course').val();
            productTag = productTag.trim().split(' ').join('-');            
            if(product==25||product==26||product==27)
            search('/recipe?q='+q+'&pro='+product+'&c='+c);
            else  
            search('/recipe?q='+q);
      });

      $( document ).on('click', '.no-tours', {}, function(e) {
            e.preventDefault();
            $.ajax({url: '/tour?toggle=off'}).done(function(data) {console.log(data);});
            $('.joyride-close-tip').trigger('click');
      });

      //use ajax for pagination
      $( document ).on('click', '#results .pagination a', {}, function(e) {
          e.preventDefault();
          search($(this).attr('href'));
      });


      if($('.favorites-result').length){
        favorites();
      }


      Modernizr.load({
      test: Modernizr.input.placeholder,
       nope: ['/js/ie.js','/css/ie9.css']
      });

      /*
      |--------------------------------------------------------------------------
      | Planner
      |--------------------------------------------------------------------------
      */

      function get_dates_partial(){

          if(!start_date){
            start_date = '';
          }

          var url = window.url+'/planner/'+start_date+'?dates=true';

          setTimeout(function() {
            $.ajax({url: url}).done(function(data) {
                  $('#single-results').removeClass('fadeOut').addClass('fadeInDown');
                  $('#single-results').html(data);
            });
          }, 650);
      }
      
      
      /* CHANGED ON 24-12-2014 Sahil New change for Menu-Mailer */
	$( document ).on('change', '#mm-product', {}, function(e) {
	
		var product = $('#mm-product').val();
		$(".mm-week").val("");
		if(product == "MM"){ 
			
			$.post("productCourse", { productID : product },
				function(data){
					//alert(data);
					$("#ajaxList").html(data);
				});
	        
		} 
     else if(product == "12" || product == "13"){ 
      
      $.post("productCourse", { productID : product },
        function(data){
          //alert(data);
          $("#ajaxList").html(data);
          
        });
          
    }
    else {
			// Make the course dropdown blank
			$('#planner-search').empty().append('<option value="">Select Course</option>');
			
			// For displaying the menus acc to the clubs
			$.post("productCourse", { productID : product },
				function(data){
					//alert(data);
					$("#ajaxMenu").html(data);
				});
			
			
			clearSearch();
		}
	});
	
	/* // CHANGED ON 24-12-2014 Sahil New change for Menu-Mailer */
	
	/* Changed as of 29-12-2014 */
	$( document ).on('change', '.mm-week', {}, function(e) {
		var product = $('#mm-product').val();

		if(product != "MM" && product != ""){ 
				var productTag = $('.mm-week').val();
                           var rTag=productTag;
				productTag = productTag.trim().split(' ').join('-');
				if(product == "12" || product == "13"){ 
     
                       $.post("tagCourse", { productID : product,rtag:rTag },
                       function(data){
                     // alert(data);
                      $("#ajaxList").html(data);
          
                       });
          
                      }
                    
        else if(!product){
           var url=window.url+"/loadCourse?rTag="+rTag;
          
           $.ajax({url: url}).done(function(data) {
               console.log(data);
               $('.recipe-course').html(data);
 
            });
            }
           else if(product==25||product==26||product==27){
           var url=window.url+"/loadCourse?rTag="+rTag+'&pID='+product;
          
           $.ajax({url: url}).done(function(data) {
               console.log(data);
               $('.recipe-course').html(data);
 
            });
        } 

		search(window.url+'/recipe?pTag='+productTag+'&pID='+product);
		} 
	});
	/* // Changed as of 29-12-2014 */
	
      
	/* CHANGED ON 21-11-2014 Sahil */
      // $( document ).on('click', '#mm-submit', {}, function(e) {
      $( document ).on('change', '#planner-search', {}, function(e) {
      
            var year,week,tag,serves,course,product;
		
            e.preventDefault();

            if($(this).val() != 'Search'){
            	product = $('#mm-product').val();
            
              year = $('#mm-year').val();

              week = $('.mm-week').val();

              if(week <10){
                if(week.indexOf("0") == -1){
                  week = '0'+week;
                }
              }

              tag = week.split(' ').join('-');
              //serves = $('#mm-servings').val();
              course = $('.recipe-course').val();
              //search(window.url+'/recipe?t='+tag+'&s='+serves+'&c='+course);
              //search(window.url+'/recipe?t='+tag+'&c='+course);
            if(product==25||product==26||product==27)
             { tag="";}
              search(window.url+'/recipe?t='+tag+'&c='+course+'&pro='+product);
              // $(this).val('Cancel').addClass('cancel');
            }else{
               clearSearch();
            }

      });
      /* CHANGED ON 21-11-2014 Sahil */
      
      

      $('.menu-planner').on('click', '.add-to-shopping-list', {}, function(e) {
            e.preventDefault();
            var url = $(this).attr('href');
            var self = $(this);

            $.ajax({url: url}).done(function(data) {
               // console.log(data);
                //
                if(self.data('feedback-el')){
                    console.log('planner'+self.data('feedback-el'));
                    var feedback = '.'+self.data('feedback-el');
                    var flash = makeFlashMessage(data,feedback);
                }
                //


            });
      });

      $( document ).on('click', '.planner-get-dates', {}, function(e) {
            e.preventDefault();

            var tooltipSelector = $(this).attr('data-selector');
            $('span[data-selector="'+tooltipSelector+'"]').hide();

            $('#results').removeClass('fadeInDown').addClass('fadeOut');

            try {
               if("undefined" === typeof(window.start_date)){
                  window.start_date = '';
                }
            }
            catch (e) {
               window.start_date = '';
            }


            if($('.custom-recipe-text').length >=1 && $('.custom-recipe-text').val() != ''){
              window.item_title = $('.custom-recipe-text').val();
              $('.custom-recipe-text').val('');

            }else if($(this).data('title') && $(this).data('title') !=''){
                window.item_title = $(this).data('title');
            }else{
              window.item_title = '';
            }

             var cal_type=$("input[name='radiog_lite']:checked").val();
         
            var url = window.url+'/planner/'+start_date+'?dates=true&cal_type='+cal_type;
            planner_data.recid = $(this).data('recid');
            $(".ActiveRec").removeClass("ActiveRec");
            $(this).addClass("ActiveRec");
         
            setTimeout(function() {
              $.ajax({url: url}).done(function(data) {
                    $('#results').removeClass('fadeOut').addClass('fadeInDown');
                    $('#results').html(data);
                    setTimeout(function() {
                      var recName=$('#'+planner_data.recid).html().replace('<p>','');
                      recName=recName.replace('</p>','');
                    $('.recName').html(recName);
                     
                    }, 650);   
              });
            }, 650);

      });
             
      /* added by Md. Al-Amin  */
      $( document ).on('click', '.cu-heading_not_used', {}, function(e) {
            e.preventDefault();
            $('.cu-heading').each(function() {
          var did=$(this).attr('data');
          $('#'+did).css('display','none');
        });
           var did=$(this).attr('data');
          $('#'+did).css('display','block');
        });   


      $( document ).on('click', '.planner-get-np', {}, function(e) {
            e.preventDefault();

            var tooltipSelector = $(this).attr('data-selector');
            $('span[data-selector="'+tooltipSelector+'"]').hide();

            $('#results').removeClass('fadeInDown').addClass('fadeOut');

            try {
               if("undefined" === typeof(window.start_date)){
                  window.start_date = '';
                }
            }
            catch (e) {
               window.start_date = '';
            }

              
            if($('.custom-recipe-text').length >=1 && $('.custom-recipe-text').val() != ''){
              window.item_title = $('.custom-recipe-text').val();
              $('.custom-recipe-text').val('');

            }else if($(this).data('title') && $(this).data('title') !=''){
                window.item_title = $(this).data('title');
            }else{
              window.item_title = '';
            }
            var wdate= $(this).data('date');  
            var cal_type=$("input[name='radiog_lite']:checked").val();
         
            var url = window.url+'/planner/'+start_date+'?dates=true&cal_type='+cal_type+'&wdate='+wdate;
            planner_data.recid = $('.ActiveRec').data('recid');
             
            setTimeout(function() {
              $.ajax({url: url}).done(function(data) {
                    $('#results').removeClass('fadeOut').addClass('fadeInDown');
                    $('#results').html(data);
                     setTimeout(function() {
                       var recName=$('#'+planner_data.recid).html().replace('<p>','');
                      recName=recName.replace('</p>','');
                    $('.recName').html(recName);
                     
                    }, 650);   

              });
            }, 650);
      });
      
      /* --------  ---------------  */    

      $( document ).on('click', '.planner-get-slots', {}, function(e) {
            e.preventDefault();
            $('#results').removeClass('fadeInDown').addClass('fadeOut');

            var url = window.url+'/planner/slots';
            planner_data.date = $(this).data('date');

            setTimeout(function() {
              $.ajax({url: url}).done(function(data) {
                  $('#results').removeClass('fadeOut').addClass('fadeInDown');
                  $('#results').html(data);
              });
            }, 650);
            
      });

      $(document ).on('click', '.planner-add', {}, function(e) {
            e.preventDefault();
            $('#results').removeClass('fadeInDown').addClass('fadeOutUp');

            planner_data.slot = $(this).data('slot-id');

            var item_title = ''; // used for cutsom entries recID = 300441

            if(window.item_title != ""){
                planner_data.recid = '300441';
                item_title = '&item_title='+window.item_title;
                window.item_title = '';
                window.myrecipes();
            }


            var url = window.url+'/planner/add/'+planner_data.recid+'?date='+planner_data.date+'&slot='+planner_data.slot+item_title;
            console.log(url);

            $.ajax({url: url}).done(function(data) {
                planner();
                setTimeout(function() {
                  if(planner_data.recid != '300441'){
                    console.log('not-custom');
                    if ( $(this).data('title') != '' ) {
                      $('#results').empty().removeClass('fadeInDown').addClass('fadeOutUp');
                    } else {
                      $('#mm-submit').val('Search').removeClass('cancel').trigger('click');
                    }
                  } else if ( $(this).data('title') != '' ) {
                    console.log('custom');
                    setTimeout(function() {
                      window.myrecipes();
                      $('#results').html('');
                    },250);
                    $('#results').removeClass('fadeOutUp fadeInDown').addClass('fadeOutUp');
                  }

                }, 250);
             });
      });

      $(document ).on('click', '.up,.down', {}, function(e) {
          clearSearch();

          //Note: Heart Healthy should not be an option after 2012 Week 52
          var year = $('#mm-year').val();
          if(year <=2012){
            if($('.recipe-course option[value="8"]').length == 0){
              $('.recipe-course').append('<option value="8">Heart Healthy</option>');
            }

          }else{
            $(".recipe-course option[value='8']").remove();
          }
      });

      $('.recipe-list').on('change', '.recipe-course', {}, function(e) {
           var url = '/recipe?c='+$(this).val();
           search(url,'.list');
      });

      /*
      |--------------------------------------------------------------------------
      | Shopping List
      |--------------------------------------------------------------------------
      */
      $(document ).on('click', '.get-ingredients', {}, function(e) {

       //   console.log('-- click get-ingredients --');
          e.preventDefault();
       //   var recid = $(".get-ingredients").data('recid');
          var recid =$(this).data('recid');          
         // alert(recid);

          $('.shopping-column ul.shopping-list li').removeClass('active');
          $(this).parents('li').addClass('active');

          getIngredients(recid,'.shopping-rec-ingredients');
      });

      $(document ).on('click', '.update-servings-modal', {}, function(e) {
          var recid = $(this).data('recid');
          var cb = $(this).data('cb');
          var currentVal = $(this).children('span').text();

          if ( $(this).hasClass('shopping-adjust') ) {
            $('#adjust-servings').foundation('reveal', 'open');
          }

          $('#adjust-servings input#rec-servings').val(currentVal);
          $('#adjust-servings .update-servings-modal-set').data('recid',recid);
      });

      $(document).on('click','#adjust-servings .reset',{}, function(e) {
        $('#adjust-servings').foundation('reveal','close');
      });


      $(document ).on('click', '.update-servings', {}, function(e) {
          e.preventDefault();
          var recid = $(this).data('recid');
          var cb = $(this).data('cb');
          console.log('update servings click:'+recid);
          console.log('#id:'+$(this).attr('id'));
          console.log($(this));
          var servings = parseInt($('.serving-amount').val());
          if(servings >=1){
            updateservings(recid,servings,window[cb]);
          }
          if ( $(this).hasClass('update-servings-modal-set') ) {
            $('#adjust-servings').foundation('reveal','close');
          }
          $('#consolidated-list h3 span').fadeIn('slow');
      });


      $(document ).on('click', '.add-to-shopping-list-inline', {}, function(e) {
          if($(this).data('feedback-el')){
            var feedback = '.'+$(this).data('feedback-el');
            addIngredient($(this).attr('href'),feedback);
          }else{
            addIngredient($(this).attr('href'));
          }

          $(this).parent('li.strike').removeClass('strike');
          e.preventDefault();
      });

      $(document ).on('click', '.remove-from-shopping-list-inline', {}, function(e) {
        removeIngredient($(this).attr('href'),'feedback-results');
        console.log('-- remove-from-shopping-list-inline -- ');
        $(this).parent('li').addClass('strike');
        e.preventDefault();
      });

      $('.shoppinglist-results').on('click', '.add-to-shopping-list', {}, function(e) {
            e.preventDefault();
            var self = $(this);
            var url = self.attr('href');
            $.ajax({url: url}).done(function(data) {

              //
              if(self.data('feedback-el')){
                var feedback = '.'+self.data('feedback-el');
                var flash = makeFlashMessage(data,feedback);
              }
              //

              shoppingList();
            });
      });

      $(document).on('click', '.remove-recipe11', {}, function(e) {
            e.preventDefault();
            console.log('-- remove-recipe -- ');
            jQuery('.tooltip').hide();
            var url = $(this).attr('href');
            $.ajax({url: url}).done(function(data) {
              shoppingList();
            });
      });

      //---------------------------------------------------------------------------

      // ============ IAN'S BLOODY MESS ================

      // User Feedback
     // $(document).on('click','.feedback .submit',{},function(evt) {
       // evt.preventDefault();

       // var subject = $('#subject').val();
       // var comment = $('#copy').val();

        //send_user_feedback();

      //});

      // My Menu / My Recipes
      //$(document).on('click', '', {}, function(evt) {
        if($("#myrecipes-tab").length != 0){
        myrecipes();
        }
      //});
      
        $(document).on('click', '#myrecipes-tab', {}, function(evt) {
       // if($("#myrecipes-tab").length != 0){
        myrecipes();
     //   }
        });

      $(document).on('click', '.add-result, .custom-recipe', {}, function(evt) {
        $('#results').removeClass('fadeOutUp');
      });

      // Cancel Custom Clicks
      $(document).on('click', '#agenda a[href="/recipe/300441"]', {}, function(evt) {
        evt.preventDefault();
      });

 	      // Print
      $(document).on('click','#print-form .submit',{}, function(evt) {
        evt.preventDefault();

        // What Print Options
        var PrintOptions = new Array();
        var PrintRecipes = new Array();
        var PrintPlanner = 'false';
        var PrintShopping = 'false';
        var PrintURL = '/print/';
        // /print/planner/list/rec-list
        // /print/true/true/300386,300381

        $('.print-option').each(function() {
          var printMe = $(this).data('print');
          PrintOptions.push(printMe);
        });

        console.log('Print Options: '+PrintOptions);

        // Print Recipe Pages
        if ( PrintOptions[0] == 1) {
          if ( $('#agenda').length === 1 ) {
            $('#agenda li a.recipe-title').each(function() {
              var recID = $(this).attr('href');
              recID = recID.split('/');
              recID = recID[2];
              if ( recID != '300441' ) {
                PrintRecipes.push(recID);
              }
            });
          } else {
            $('.shoppinglist-container ul li a[data-recid]').each(function() {
              var recID = $(this).data('recid');
              if ( recID != '300441' ) {
                PrintRecipes.push(recID);
              }
            });
          }
          PrintRecipes = PrintRecipes.toString();
          console.log('Print Recipes: '+PrintRecipes);
        }

        // Print Planner
        if ( PrintOptions[2] == 1) {
            if($("radio1").length==0){
               // PrintPlanner='monthly'
               PrintPlanner = $("input[name='radiog_lite']:checked").val();
            }
           // else{
             //  PrintPlanner = $("input[name='radiog_lite']:checked").val();
           // }
            
        }

        // Print Shopping List
        if ( PrintOptions[1] == 1) {
          PrintShopping = 'true';
        }

        PrintURL += PrintPlanner+'/'+PrintShopping+'/'+PrintRecipes;
        console.log(PrintURL);
        window.open(PrintURL);

        // Close Print Options Modal
        $('#printModal').foundation('reveal','close');

      });


      $(document).on('click','#print-form ul li strong',{},function(evt) {
        var currentOpt = $(this).prev('.print-option').data('print');
        if ( currentOpt == 1 ) {
          var newOpt = 0;
          $(this).prev('.print-option').addClass('inactive').removeClass('active');
        } else {
          var newOpt = 1;
          $(this).prev('.print-option').removeClass('inactive').addClass('active');
        }
        $(this).prev('.print-option').data('print',newOpt);
      });

      $(document).on('click', '#print-form ul li .print-option', {}, function(evt) {
        var currentOpt = $(this).data('print');
        if ( currentOpt == 1 ) {
          var newOpt = 0;
          $(this).addClass('inactive').removeClass('active');
        } else {
          var newOpt = 1;
          $(this).removeClass('inactive').addClass('active');
        }
        $(this).data('print',newOpt);
      });

      // JoyRide Hacks - Dashboard
      $('.close-joyride').click(function() {
        $('.joyride-close-tip').trigger('click');
      });

      $('.joyride-next-tip').click(function() {
        $('.no-tours').hide();
      });
   /* Updated on 25-05-2015   */ 
/*
      $('.tour-toggle').click(function() {
       // $(document).foundation('joyride', 'start');
      });
*/
      $('.tour-toggle').click(function() {
        console.log('joyride start');
        $(document).foundation().foundation('joyride', 'start');

      });
/* ---------- end ----------- */

      // Sidebar Navigation
      $("#menu-toggle").click(function(evt) {
        evt.preventDefault();
        if ($(this).hasClass('active')) {
          console.log('turn it off');
          $(this).toggleClass('active');
          $('#sidebar').removeClass('slideInLeft');
          $('#sidebar').addClass('slideOutLeft');

          setTimeout(function() {
            $('#sidebar, #menu-toggle').removeClass('active');
            $('#content').removeClass('large-9 medium-8');
            $('#content').addClass('large-12 medium-12');
          }, 500);

        } else {
          console.log('turn it on');
          $(this).toggleClass('active');
          $('#sidebar').removeClass('slideOutLeft');
          $('#content').removeClass('large-12 medium-12');
          $('#content').addClass('large-9 medium-8');

          setTimeout(function() {
            $('#sidebar').addClass('slideInLeft');
            $('#sidebar, #menu-toggle').removeClass('inactive').addClass('active');
          }, 150);
        }

      });

      // ================
      // Number input styling and browser fallbacks
      $('form#findrecipes-menumailer, #adjust-servings.recipe').each(function() {
        var initHTML = '<span class="number-control up"></span><span class="number-control down"></span>';
        $('.number').after(initHTML);
      });

      // Up control for number fields
        $('.number-control.up').click(function() {
          var currentValue = $(this).siblings('input.number').val();
          var currentStep = $(this).siblings('input.number').attr('step');
          var currentMax = $(this).siblings('input.number').attr('max');

          if (currentValue == currentMax) {
            var newValue = parseFloat(currentValue);
          } else {
            var newValue = parseFloat(currentValue) + parseFloat(currentStep);
          } $(this).siblings('input.number').val(newValue);
        });

      // Down control for number fields
        $('.number-control.down').click(function() {
          var currentValue = $(this).siblings('input.number').val();
          var currentStep = $(this).siblings('input.number').attr('step');
          var currentMin = $(this).siblings('input.number').attr('min');

          if (currentValue == currentMin) {
            var newValue = parseFloat(currentValue);
          } else {
            var newValue = parseFloat(currentValue) - parseFloat(currentStep);
          }
          $(this).siblings('input.number').val(newValue);
        });

        // ================
        // Login form
        $('.login input[type="text"]').attr('placeholder','Email Address').addClass('email');
        $('.login input[type="password"]').attr('placeholder','Password').addClass('password');
        $('.login input[type="submit"]').addClass('button small login-button');
        $('.login label').hide();

        // ================
        // Custom Tab Switcher
        $('#findrecipes .tabs dd a').click(function() {
          clearSearch();
          $('html, body').animate({
              scrollTop: $('#content').offset().top
          }, 500);

          $('#results').empty();
          clearSearch();

          /* New added by Md.Al-Amin  */
        /*   var tabtxt=$.trim(($(this).html())); 
         
          if(tabtxt=='Root Cause Recipes'||tabtxt=="Dr. Kellyann's Meal Plans"){ 
          $('#mm-product').val($('#mm-product option').eq(1).val());
          var product=$('#mm-product option').eq(1).val();
           $.post("productCourse", { productID : product },
        function(data){
          //alert(data);
          $("#ajaxList").html(data);
          $('.mm-week').val($('.mm-week option').eq(1).val());
          $('#planner-search').val('view_all');
          $('#planner-search').change();
          if(product == "12" || product == "13" || product == "24" || product == "25" || product == "26" || product == "27"){ 
      
           $.post("tagCourse", { productID : product,rtag:$('.mm-week option').eq(1).val() },
        function(data){
          //alert(data);
          $("#ajaxList").html(data);
          
        });
          
        }
        });
          //$('#mm-product').change();
          
           }

           */
           var tabtxt=$.trim(($(this).html())); 
         
          if(tabtxt=='Root Cause Recipes'||tabtxt=="Bone Broth Diet"||tabtxt=="Moving Forward"){ 
          if(tabtxt=="Moving Forward"){
          $('#mm-product').val($('#mm-product option').eq(3).val());
          var product=$('#mm-product option').eq(3).val();
          $('.mm-week').val($('.mm-week option').eq(1).val());
           $('.mm-week').change();
           }
           else{
            $('#mm-product').val($('#mm-product option').eq(1).val());
          var product=$('#mm-product option').eq(1).val();
           }
          if(tabtxt=="Bone Broth Diet") {
           $('.mm-week').val($('.mm-week option').eq(1).val());
           $('.mm-week').change();
         }

           $.post("productCourse", { productID : product },
        function(data){
         
          $("#ajaxList").html(data);
          $('.mm-week').val($('.mm-week option').eq(1).val());

          $('#planner-search').val('view_all');
          $('#planner-search').change();
          if(product == "12" || product == "13" || product == "24" || product == "25" || product == "26" || product == "27"){ 

           $.post("tagCourse", { productID : product,rtag:$('.mm-week option').eq(1).val() },
        function(data){
          
          $("#ajaxList").html(data);
          
        });
          
        }
        });
          //$('#mm-product').change();
         
       if(tabtxt=="Bone Broth Diet"||tabtxt=="Moving Forward"){
          $('.ctl1').css('display','none');$('.ctl2').css('display','none');$('.ctl3').css('float','left');
           $('#csearch').attr("placeholder", "Search all recipes within "+tabtxt);    
       }


           }
          /* ---------------- */

        });

        // ================
        // Shopping List
        /*
        $('li.shopping-cat li a').click(function() {
          if ( $(this).parent('li').hasClass('strike') ) {
            $(this).parent('li.strike').removeClass('strike');
          } else {
            $(this).parent('li').addClass('strike');
          }
        });
        */
        /*
        $(document ).on('click', '.li.shopping-cat li a', {}, function(e) {
            console.log('toggle strike');
            if ( $(this).parent('li').hasClass('strike') ) {
              $(this).parent('li.strike').removeClass('strike');
            } else {
              $(this).parent('li').addClass('strike');
            }
        });
        */


        // ================
        // Recipes / Favorites
        /*
        $('.add-to-shopping-list-inline').click(function() {
          var confirmMsg = '<div class="flash-message animated fadeInDown">Recipe added to shopping list.</div>';
          setTimeout(function() {
            $('#content .content').prepend(confirmMsg);
            $('html,body').animate({ scrollTop: 0 }, 'slow');
            return false;
          }, 500);
        })
        */

          if(window.tour !='off'){
           // $(document).foundation('joyride', 'start');
            $(document).foundation().foundation('joyride', 'start');
          }


          $('.close-joyride').click(function() {
            $('.joyride-close-tip').trigger('click');
          });

          $('.joyride-next-tip').click(function() {
            $('.no-tours').hide();
          });
          $('.no-tours').appendTo('.joyride-content-wrapper');
          $('.no-tours').first().remove();

          // REMOVE - ingredient  /recipe/ page


          $(document ).on('click', '#single-recipe ul.ingredients-list li', {}, function(e) {
              //
              var el = $(this);

              if(el.hasClass('add-all')){
                return;
              }

              var ingid = el.data('ingid');
              var recid = el.data('recid');
              var link = el.children('a:first');

              if (el.hasClass('selected')) {
                el.addClass('unselected').removeClass('selected');
                removeIngredient('/shopping/remove/ingredient/'+ingid,'.ingredients-list');
                link.attr('title','Add Ingredient Shopping List');

              }else{
                el.addClass('selected').removeClass('unselected');
                addIngredient('/shopping/add/ingredient/'+recid +'/'+ingid,'.ingredients-list');
                link.attr('title','Remove Ingredient From Shopping List');
              }

          });

          //ADD ALL /recipe/ page
          $('#single-recipe ul.ingredients-list li.add-all span').click(function(e) {

            e.preventDefault();

            var url = $(this).siblings('a').attr('href');
            $.ajax({url: url}).done(function(data) {
                var confirmMsg = '<div class="flash-message animated fadeInDown">Recipe added to shopping list.</div>';
                setTimeout(function() {
                  $('#content .content').prepend(confirmMsg);
                  $('html,body').animate({ scrollTop: 0 }, 'slow');
                  return false;
                }, 500);
            });

          });


          $('.tour-toggle').click(function() {
          	
            $(document).foundation('joyride', 'start');
           
          });
          

        // ================
        // Right Sidbar

        $('#sidebarmenus ul li a.menu-filter').click(function() {
          $('#sidebarmenus ul li a.menu-filter').removeClass('active');
          $(this).addClass('active');
        });

        $('#sidebarmenus ul li a').removeClass('active');
        $('#sidebarmenus ul li a[data-class="active"]').addClass('active');
        $('#sidebarmenus ul li a').change(function() {
          $(this).addClass('active');
        });

        if ( $('#sidebarmenus ul li a').hasClass('active') ) {
        } else {
          $('#sidebarmenus ul li a.menu-filter-all').addClass('active');
        }

        // ================
        // Views Switcher
        $('.recipe-grid-large').hide();
        $('#sidebarviews a').click(function() {
          $('#sidebarviews a').removeClass('active');
          $(this).addClass('active');

          if ($(this).hasClass('listview')) {
            $('.recipe-grid-large, .recipe-list-large').removeClass('fadeOutLeft fadeInLeft');
            $('.recipe-grid-large').addClass('fadeOutLeft');
            setTimeout(function() {
              $('.recipe-grid-large').hide();
              $('.recipe-list-large').show().addClass('fadeInLeft');
            },650);
          } else {
            $('.recipe-grid-large, .recipe-list-large').removeClass('fadeOutLeft fadeInLeft');
            $('.recipe-list-large').addClass('fadeOutLeft');
            setTimeout(function() {
              $('.recipe-list-large').hide();
              $('.recipe-grid-large').show().addClass('fadeInLeft');
            },650);
          }
        });


        //
        $('.reset-account').click(function(e) {
            //
             var usrEmail = $('#usrEmail').text();
             var result = confirm("Are you want to reset the login for the account associated with "+usrEmail+"?\n\nThis cannot be undone.")
             if (result){
                return true;
             }

             e.preventDefault();
            //
        });



    //
    });

$(window).load(function() {
  function preload(arrayOfImages) {
      $(arrayOfImages).each(function(){
          $('<img/>')[0].src = this;
      });
  }

  preload([
      '/img/membership-smoothies.jpg',
      '/img/membership-paleo.jpg',
      '/img/membership-mm-premium.jpg',
      '/img/membership-mm-basic.jpg',
      '/img/membership-freezer-meal.jpg',
      '/img/membership-crock-cooker.jpg',
      '/img/membership-30day.jpg',
      '/img/logo_mm_premium_red.png',
      '/img/logo_mm_premium_grey_sm.png',
      '/img/logo_mm_premium_grey.png',
      '/img/logo_mm_basic_grey.png',
      '/img/logo_mm_basic.png',
      '/img/logo_mm.png',
      '/img/logo_mm-red.png',
      '/img/logo-footer.png',
      '/img/logo-footer-red.png',
      '/img/icon-upgrade-white.png',
      '/img/icon-upgrade-grey.png',
      '/img/icon-shopping-list-white.png',
      '/img/icon-shopping-list-grey.png',
      '/img/icon-search.png',
      '/img/icon-search-grey.png',
      '/img/icon-remove-red.png',
      '/img/icon-remove-grey.png',
      '/img/icon-recipes-white.png',
      '/img/icon-recipes-grey.png',
      '/img/icon-print-white.png',
      '/img/icon-print-lrg.png',
      '/img/icon-print-lrg-white.png',
      '/img/icon-print-lrg-green.png',
      '/img/icon-print-grey.png',
      '/img/icon-menu.png',
      '/img/icon-menu-planner-white.png',
      '/img/icon-menu-planner-grey.png',
      '/img/icon-logout-white.png',
      '/img/icon-logout-grey.png',
      '/img/icon-listview-white.png',
      '/img/icon-listsmall-white.png',
      '/img/icon-listgrid-white.png',
      '/img/icon-home-white.png',
      '/img/icon-home-grey.png',
      '/img/icon-help-white.png',
      '/img/icon-help-grey.png',
      '/img/icon-favorites-white.png',
      '/img/icon-favorites-sm-yellow.png',
      '/img/icon-favorites-sm-grey.png',
      '/img/icon-favorites-lrg-yellow.png',
      '/img/icon-favorites-grey.png',
      '/img/icon-email-red.png',
      '/img/icon-email-grey.png',
      '/img/icon-email-green.png',
      '/img/icon-download-white.png',
      '/img/icon-download-red.png',
      '/img/icon-download-grey.png',
      '/img/icon-download-green.png',
      '/img/icon-check-white.png',
      '/img/icon-check-red.png',
      '/img/icon-check-light.png',
      '/img/icon-check-dark.png',
      '/img/icon-arrow-up.png',
      '/img/icon-arrow-up-white.png',
      '/img/icon-arrow-up-dark.png',
      '/img/icon-arrow-right.png',
      '/img/icon-arrow-right-white.png',
      '/img/icon-arrow-right-dark.png',
      '/img/icon-arrow-left.png',
      '/img/icon-arrow-left-white.png',
      '/img/icon-arrow-left-dark.png',
      '/img/icon-arrow-down.png',
      '/img/icon-arrow-down-white.png',
      '/img/icon-arrow-down-sm-white.png',
      '/img/icon-arrow-down-sm-grey.png',
      '/img/icon-arrow-down-grey.png',
      '/img/icon-arrow-down-dark.png',
      '/img/icon-add-shopping.png',
      '/img/icon-add-shopping-white.png',
      '/img/icon-add-shopping-red.png',
      '/img/icon-add-red.png',
      '/img/icon-add-green.png',
      '/img/icon-account-white.png',
      '/img/icon-account-grey.png',
      '/img/header-mm_premium_signup.jpg',
      '/img/grad-white-to-light.png',
      '/img/grad-white-to-grey.jpg',
      '/img/grad-white-to-grey-lrg.jpg',
      '/img/grad-black-to-dark-lrg.jpg',
      '/img/adblock-smoothies.jpg',
      '/img/adblock-menumailer.jpg',
      '/img/icon-email-white.png'
  ]);
});

// rating in recipe page   
  if($("#score-rate").length!==0){ 
 $(function() {           
 $.fn.raty.defaults.path = '/js/raty-2.5.2/lib/img';  
 $.fn.raty.defaults.hints=false;
$('#score-rate').raty({
    score: window.rating,
    readOnly : window.is_rated,
  click: function(score, evt) {
    var recipeid=$("#recipeid").val();   
    var url = window.url+'/recipe/rating/';
    $.ajax({url: url,type:'GET',data:{score:score,user:window.user,recipeid:recipeid}}).done(function(data){
           // alert(data);
            $("#rate-text").html("You Have Rated");
            $('#score-rate').raty({
            score:score,
            readOnly   : true,
           });
           
      });
   
  }
});


 });
 }
 
 //darg and drop feature
                    if($(".droppable").length!==0){ 
                        setInterval(function(){
                        $( ".draggable" ).draggable({ 
                            cursor: "move", cursorAt: { top: 56, left: 56 },
                            helper: "clone",
                            
                        //    start:function(event, ui) { $(this).css("font-size","10px"); },
                       //     stop: function(event, ui) { $(this).css("font-size","2px"); } 
                             //  appendTo: 'body',
                              start: function(e, ui)
                            {
                            //    alert("hi");
                             
                             $(ui.helper).addClass("ui-clone-helper");
                         //    var text=$(".ui-clone-helper").clone().addClass("showPos");
                         //    $(".ui-clone-helper").remove();
                          //   $(".block-grid").append(text);
                             
                            // console.log(text);
                         //    $(ui.helper).css("width","40px");
                            },drag: function( event, ui ) {
                         //       var getTop = event.pageY;
                                //console.log(getTop);
                         //       var getLeft = event.pageX;
                         //       $(".block-grid").find(".showPos").css({
                          //          "top":getTop- $(".block-grid").offset().top,
                           //         "left":getLeft-$(".block-grid").offset().left
                                    
                         //       });
                                //console.log(ui.position.top);
                            }
                       //         scroll: true,
                      //          refreshPositions: true
                                

                            });                 
                        $( ".droppable" ).droppable({
                            drop: function( event, ui ) { 
                         //   $(this).append($(ui.draggable).css('background-color','#18af08'));
                            var date= $(this).data( "date" );
                            var slot=$(this).data( "slot" );  
                            var remove=$(ui.draggable).data("remove");
                            var dragslot=$(ui.draggable).data("slot");
                            var dragdate=$(ui.draggable).data("date");
                         //   alert(remove);
                           // alert(slot);  
                          //  alert(date);
                          //  alert(dragslot);
                           // alert(dragdate);
                            var recipe=$(ui.draggable).attr("id");  
                            if($(ui.draggable).data("title")){
                                 window.item_title= $(ui.draggable).data("title"); 
                            }
                         //add ajax call                                               
                                          
                                          planner_data.slot =slot;
                                          planner_data.date=date;
                                          planner_data.recid=recipe
                                         var item_title = ''; // used for cutsom entries recID = 300441
                                      
                                         if(window.item_title != ""){
                                             planner_data.recid = '300441';
                                             item_title = '&item_title='+window.item_title;
                                             window.item_title = '';
                                             window.myrecipes();
                                         }
                                         
                                         

                                            // var url = window.url+'/planner/add/'+planner_data.recid+'?date='+planner_data.date+'&slot='+planner_data.slot+item_title;
                                            
                                             var url = window.url+'/planner/add/'+planner_data.recid+'?date='+planner_data.date+'&slot='+planner_data.slot+item_title+'&remove='+remove+'&dragslot='+dragslot+'&dragdate='+dragdate;   
                                           // alert(url);
                                            $.ajax({url: url}).done(function(data) {// alert(data);
                                             planner();
                                             setTimeout(function() {
                                               if(planner_data.recid != '300441'){                                                
                                                 if ( $(this).data('title') != '' ) {
                                                  // $('#results').empty().removeClass('fadeInDown').addClass('fadeOutUp');
                                                 } else {
                                                   $('#mm-submit').val('Search').removeClass('cancel').trigger('click');
                                                 }
                                               } else if ( $(this).data('title') != '' ) {
                                               //  console.log('custom');
                                                 setTimeout(function() {
                                                   window.myrecipes();
                                                   $('#results').html('');
                                                 },250);
                                              //   $('#results').removeClass('fadeOutUp fadeInDown').addClass('fadeOutUp');
                                               }

                                             }, 250);
                                          });
                            }
                        });
                    }, 1000);
                    }
                    
                    
      //apply jscroller              
  if($(".scroll-pane").length!==0){ 
                     setInterval(function(){
                      $('.scroll-pane').jScrollPane(
					{                               
                                 showArrows: true,                                  
                                }
				);
                        }, 1000);
 
  }
  
  
  // Remove all menu from shopping list
  
      // $(document).on('click', '#clean-menu', {}, function(e) {
            // e.preventDefault();
            // var url = window.url+'/shopping/cleanmenu/';         
//              
             // $(".close-reveal-modal").trigger("click");
          // //  var url = $(this).attr('href');
            // $.ajax({url: url}).done(function(data) {
              // //  alert(data);
              // shoppingList();
            // // location.reload();
            // });
      // });
      
      $('#clean-menu').on('click', '#clean-menu', {}, function(e) {
            e.preventDefault();
            //var url = window.url+'/shopping/cleanmenu/';         
             var self = $(this);
             var url = self.attr('href');
             
             $(".close-reveal-modal").trigger("click");
          //  var url = $(this).attr('href');
            $.ajax({url: url}).done(function(data) {
              //  alert(data);
              
              if(self.data('feedback-el')){
                var feedback = '.'+self.data('feedback-el');
                var flash = makeFlashMessage(data,feedback);
              }
              shoppingList();
            // location.reload();
            });
      });
 
 

  
// ============ END OF THE BLOODY MESS ================

})(jQuery, this);


/*------------ added by Niaz to fix serving size popup ------*/   
  $(function(){

$(".update-servings-modal").click(function(event) {
  /* Act on the event */
  event.preventDefault();
  console.log('clicked');
  $('#adjust-servings').foundation('reveal','open');
});

});  
/*------------------------- */  