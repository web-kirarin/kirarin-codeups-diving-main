
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  $(".js-hamburger").click(function () {
    if ($(".js-hamburger").hasClass('is-active')) {
    $('.js-hamburger').removeClass("is-active");
    $(".js-sp-nav").fadeOut(300);
    } else {
    $('.js-hamburger').addClass("is-active");
    $(".js-sp-nav").fadeIn(300);
    }
    });
});
