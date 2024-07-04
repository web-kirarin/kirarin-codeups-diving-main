
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  $(".js-hamburger,.js-sp-nav").click(function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-sp-nav").toggleClass("is-active");
  });
  //ローディングアニメーション
  $(window).on("load", function () {
    const fadeOutLoad = () => new Promise((resolve) => {
        $(".js-load").fadeOut(1000, resolve);
    });

    const showLoader = () => {
        return new Promise((resolve) => {
            const loader = document.querySelector('.js-loader');
            if (loader) {
                loader.style.display = 'flex';
                resolve();
            } else {
                console.error('Loader element not found');
                resolve(); // Resolve even if there's an error to continue the process
            }
        });
    };

    const startAnimations = () => {
        return new Promise((resolve) => {
            const turtleImages = document.querySelectorAll('.loading__turtle-image');
            if (turtleImages.length === 4) {
                turtleImages.forEach((image) => {
                    image.style.animationPlayState = 'running';
                });
                setTimeout(resolve, 3000); // Wait for the animations to complete
            } else {
                console.error('Not all turtle images were found');
                resolve(); // Resolve even if there's an error to continue the process
            }
        });
    };

    const hideLoaderShowContent = () => {
        return new Promise((resolve) => {
            const loader = document.querySelector('.js-loader');
            const content = document.querySelector('.js-content');
            const overlayText = document.querySelector('.js-overlay-text');
            const turtleImage = document.querySelector('.loading__turtle-full-image');

            if (loader) {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                    if (content) {
                        content.style.display = 'block';
                    } else {
                        console.error('Content element not found');
                    }
                    setTimeout(() => {
                        if (overlayText) {
                            overlayText.style.opacity = '1';
                        } else {
                            console.error('Overlay text element not found');
                        }
                        resolve();
                    }, 500); // Delay to show overlay text
                }, 500); // Adjust the fade-out duration if needed
            } else {
                console.error('Loader element not found');
                resolve(); // Resolve even if there's an error to continue the process
            }
        });
    };

    fadeOutLoad()
        .then(showLoader)
        .then(startAnimations)
        .then(hideLoaderShowContent)
        .catch((error) => {
            console.error('An error occurred:', error);
        });
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



