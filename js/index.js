$(document).ready(function(){
    //
    AOS.init();
    
    //header_nav
    $('.store a').hover(function(){
        $('.nav_store').stop().animate({height:'350px'},300);
    },function(){
        $('.nav_store').stop().animate({height:'0'},300);
    })
    
    //main_best - slide
    var swiper = new Swiper('.main_best .swiper-container', {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 4,
      scrollbar: {
        el: '.main_best .swiper-scrollbar',
      },
      pagination: {
        el: '.main_best .swiper-pagination',
        clickable: true,
      },
      breakpoints: {
//        640: {
//          slidesPerView: 2,
//          spaceBetween: 20,
//        },
        480: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        768: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
      }
    });
})