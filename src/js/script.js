
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  $(".js-hamburger,.js-sp-nav").click(function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-sp-nav").toggleClass("is-active");
  });
  //ローディングアニメーションとスライダー1個目
  $(window).on("load", function () {
    const fadeOutLoad = () => new Promise((resolve) => {
        $(".js-load").fadeOut(1000, resolve);
    });

    const showLoader = () => {
        return new Promise((resolve) => {
            const loader = document.querySelector('.js-loader');
            loader.style.display = 'flex';
            resolve();
        });
    };

    const startAnimations = () => {
        return new Promise((resolve) => {
            const turtleImages = document.querySelectorAll('.loading__turtle-image');
            turtleImages.forEach((image) => {
                image.style.animationPlayState = 'running';
            });
            setTimeout(resolve, 3000); // Wait for the animations to complete
        });
    };

    const hideLoaderShowContent = () => {
        return new Promise((resolve) => {
            const loader = document.querySelector('.js-loader');
            const content = document.querySelector('.js-content');
            const overlayText = document.querySelector('.js-overlay-text');
            const turtleImage = document.querySelector('.loading__turtle-full-image');

            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none'; // Hide loader instead of removing it
                content.style.display = 'block';
                setTimeout(() => {
                    overlayText.style.opacity = '1';
                    setTimeout(() => {
                        turtleImage.classList.add('fade-out');
                        setTimeout(() => {
                            turtleImage.style.display = 'none'; // Hide turtle image instead of removing it
                            resolve();
                        }, 1500); // Wait for the fade-out to complete
                    }, 3000); // Time before fading out the turtle image
                }, 500); // Delay to show overlay text
            }, 500); // Adjust the fade-out duration if needed
        });
    };

    fadeOutLoad()
        .then(showLoader)
        .then(startAnimations)
        .then(hideLoaderShowContent)
        .then(() => {
            // スライダーの初期化
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
                        swiper01.autoplay.start();
                    }
                }
            });

            // 全体のローディングアニメーションを削除
            const loadingElement = document.querySelector('.loading');
            if (loadingElement && loadingElement.parentNode) {
                loadingElement.parentNode.removeChild(loadingElement);
            }

            // クラス js-content の display を none に設定
            const contentElement = document.querySelector('.js-content');
            if (contentElement) {
                contentElement.style.display = 'none';
            }
        })
        .catch((error) => {
            console.error('An error occurred:', error);
        });
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



