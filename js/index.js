$(document).ready(function(){
    
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
    });
})