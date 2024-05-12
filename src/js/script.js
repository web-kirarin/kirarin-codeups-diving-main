
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
    speed: 1500,
    slidesPerView: 1.3,
    spaceBetween: 24,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    breakpoints: {
      769: {
        slidesPerView: 3.5,
        spaceBetween: 40,
      }
    },
    navigation: {
      nextEl: ".cp-swiper-button-next",
      prevEl: ".cp-swiper-button-prev",
    },
  });

  //要素の取得とスピードの設定
  var box = $('.js-image'),
    speed = 700;

  //.js-imageの付いた全ての要素に対して下記の処理を行う
  box.each(function () {
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
      image = $(this).find('img');
    var counter = 0;

    image.css('opacity', '0');
    color.css('width', '0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function () {
      if (counter == 0) {
        $(this).delay(200).animate({ 'width': '100%' }, speed, function () {
          image.css('opacity', '1');
          $(this).css({ 'left': '0', 'right': 'auto' });
          $(this).animate({ 'width': '0%' }, speed);
        })
        counter = 1;
      }
    });
  });
});



