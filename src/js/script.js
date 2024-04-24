
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  $(".js-hamburger,.js-sp-nav").click(function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-sp-nav").toggleClass("is-active");
  });
  //スライダー
  const swiper = new Swiper(".swiper", {
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
});

