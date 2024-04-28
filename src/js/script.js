
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  $(".js-hamburger,.js-sp-nav").click(function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-sp-nav").toggleClass("is-active");
  });
  //スライダー
const swiper01 = new Swiper(".fv-swiper .swiper", {
  loop: true,
  effect: "fade",
  speed: 3000,
  allowTouchMove: false,
  autoplay: {
    delay: 3000,
  },
  on: {
    resize: function () {
      swiper.autoplay.start();
    }
  }
});

//スライダー2個目
const swiper02 = new Swiper(".cp-swiper .swiper", {
  loop: true,
  speed:1500,
  slidesPerView:1.2,
  autoplay: {
    delay: 1500,
  },
  breakpoints: {
    769:{
      slidesPerView:3.5,
    }
  }
});
});



