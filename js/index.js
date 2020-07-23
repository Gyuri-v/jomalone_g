$(document).ready(function(){
    //
    AOS.init();
    
    //
    
    
    //header_nav
    $('.store a').hover(function(){
        $('.nav_store').stop().animate({height:'350px'},300);
    },function(){
        $('.nav_store').stop().animate({height:'0'},300);
    })
    
    //main_col1 scroll event
//    var headerOffset = $('.header_gnb').offset();
//    
//    $(window).scroll(function(){
//        if($(document).scrollTop() > headerOffset.top){
//            $('.main_col1 .inner').animate({marginTop : '-450px'},700);
//        }
//        else{
//            $('.main_col1 .inner').animate({marginTop : '0'});
//        }
//    })
    
    //main_best - slide
    var swiper = new Swiper('.main_best .swiper-container', {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
      scrollbar: {
        el: '.main_best .swiper-scrollbar',
      },
      breakpoints: {
        480: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        768: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        1024: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
      }
    });
    
    //main_col2 scroll event
    $(window).scroll(function(){
        if($(document).scrollTop()+500 >= $('.main_col2').offset().top){
//            $('.main_col2 .col2_left_img').animate({marginLeft : '0'},500);
//            $('.main_col2 .txt_wrap h3').animate({marginLeft : '0'},600);
//            $('.main_col2 .txt_wrap p').animate({marginLeft : '0'},700);
//            $('.main_col2 .txt_wrap .more').animate({marginLeft : '0'},800);
//            $('.main_col2 .col2_right_img .img_wrap').delay(500).animate({marginLeft : '0'},1000);
            

            gsap.to(".main_col2 .col2_left_img", 0.5, { marginLeft : 0, opacity : 1 } );
            gsap.to(".main_col2 .txt_wrap h3", 0.6, { marginLeft : 0, opacity : 1 } );
            gsap.to(".main_col2 .txt_wrap p", 0.7, { marginLeft : 0, opacity : 1 } );
            gsap.to(".main_col2 .txt_wrap .more", 0.8, { marginLeft : 0, opacity : 1 } );
            gsap.to(".main_col2 .col2_right_img .img_wrap", 1, { marginLeft : 0, opacity : 1, } );
        
    }})
    
    
    //main_care line scroll event    
    $(window).scroll(function(){
        if($(document).scrollTop()+500 >= $('.main_care').offset().top){
//            $('.v_top').animate({ height : '15vw'});
//            $('.v_bottom').animate({ height : '15vw'});
        }
    })
    
    //main_frag
    $('.main_frag .bg').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 1,
    });
})

$(document).ready(function() {
	try {

		$('.main_frag .bg').ripples({
			resolution: 128,
			dropRadius: 10, //px
			perturbance: 0.04,
			interactive: false
		});
	}
	catch (e) {
		$('.error').show().text(e);
	}

	$('.js-ripples-disable').on('click', function() {
		$('.main_frag .bg').ripples('destroy');
		$(this).hide();
	});

	$('.js-ripples-play').on('click', function() {
		$('.main_frag .bg').ripples('play');
	});

	$('.js-ripples-pause').on('click', function() {
		$('.main_frag .bg').ripples('pause');
	});

	// Automatic drops
	setInterval(function() {
		var $el = $('.main_frag .bg');
		var x = Math.random() * $el.outerWidth();
		var y = Math.random() * $el.outerHeight();
		var dropRadius = 20;
		var strength = 0.04 + Math.random() * 0.04;

		$el.ripples('drop', x, y, dropRadius, strength);
	}, 400);
});