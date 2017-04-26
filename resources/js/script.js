$(document).ready(function() {
  
	
    /*animation-onscroll*/
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
	}, {
        offset: '40%'
    }); 
	
	$('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeIn');
	}, {
        offset: '40%'
    }); 
	
	$('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
	}, {
        offset: '40%'
    }); 
	
	$('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated fadeIn');
	}, {
        offset: '40%'
    }); 
	
	$('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animated fadeIn');
	}, {
        offset: '40%'
    }); 
	
	$('.js--wp-6').waypoint(function(direction) {
        $('.js--wp-6').addClass('animated fadeIn');
	}, {
        offset: '40%'
    });
	
	$('.js--wp-7').waypoint(function(direction) {
        $('.js--wp-7').addClass('animated fadeIn');
	}, {
        offset: '40%'
    });
    
	/*scroll-down*/
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
	/*scroll-up*/
	$("a[href='#top']").click(function() {
	  $("html, body").animate({ scrollTop: 0 }, "slow");
	  return false;
	});
	
});
