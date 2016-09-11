function roll(){
    var curr = 2;
    var count = 4;
    $('#testimonials .testimonial:nth-child(1)').show("slide", { direction: "left" }, 500);
    setInterval(function(){
        //console.log('C:'+curr);
        $('#testimonials .testimonial').hide("slide", { direction: "right" }, 500);
        $('#testimonials .testimonial:nth-child('+curr+')').delay(750).show("slide", { direction: "left" }, 500);
        curr++;
        if(curr == count+1){
            // 5000 - 500 - 750 - 500 = 3250    =>    delay = 3000
            $('#testimonials .testimonial:nth-child(4)').delay(3000).hide("slide", { direction: "right" }, 500);
            curr = 1;
        }
    }, 5000);
  }

$(document).ready(function() {

  $("#owl-demo").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      loop:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });

  $('.js-right').click(function(){
    
    var old = $('.testimonial.current');

    old.next('.testimonial').addClass('current');

    old.removeClass('current');

   
  });
 

  $('.js-left').click(function(){
    
    var old = $('.testimonial.current');

    old.prev('.testimonial').addClass('current');

    old.removeClass('current');

   
  });
});