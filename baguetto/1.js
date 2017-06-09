$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('200');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".nav").css('background-color', 'red');
       } else {
          $('.nav').css('background-color', 'blue');
       }
   });
    }
});