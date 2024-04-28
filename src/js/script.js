
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  $(".js-hamburger,.js-sp-nav").click(function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-sp-nav").toggleClass("is-active");
  });
  //スライダー
const swiper = new Swiper(".swiper .fv-swiper", {
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

const swiper = new Swiper(".swiper .cp-swiper", {
  loop: true, // ループ
  speed: 1500, // 少しゆっくり(デフォルトは300)
  slidesPerView: 1.5, // 一度に表示する枚数
  spaceBetween: 30, // スライド間の距離
  centeredSlides: true, // アクティブなスライドを中央にする
  autoplay: { // 自動再生
    delay: 1000, // 1秒後に次のスライド
    disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
  },
  // 前後の矢印
  navigation: {
    nextEl: ".cp-swiper-button-next",
    prevEl: ".cp-swiper-button-prev",
  },
});
});



