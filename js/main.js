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

  $('.js-menu').click(function(e){

      $('.navbar-mobile').toggleClass( "active" );
      
      $('.navbar-mobile__nav-toggle-title').toggleClass("closed");
      $('.list-closed').toggle("slow");
  });

  $("#owl-demo").owlCarousel({
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });

  $('.js-right').click(function(){
    
    var old = $('.testimonial.current');
    if(old.next('.testimonial').length > 0){
      old.next('.testimonial').addClass('current');
    }
    else{
      $('.testimonial:first').addClass('current');
    }
  
    old.removeClass('current');
  });
 

  $('.js-left').click(function(){
    
    var old = $('.testimonial.current');
    if(old.prev('.testimonial').length > 0){
      old.prev('.testimonial').addClass('current');
    }
    else{
      $('.testimonial:last').addClass('current');
    }
    

    old.removeClass('current');


  });

  $('.js-search').click(function(){
    $('.nav__search').css('border-color','white');
    $('.nav__search').css('width','140px');
  });
});