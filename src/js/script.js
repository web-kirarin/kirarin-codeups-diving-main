
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  $(".js-hamburger,.js-sp-nav").click(function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-sp-nav").toggleClass("fade");
  });
  //ローディングアニメーションとスライダー1個目
  $(window).on("load", function () {
    const fadeOutText = () => new Promise((resolve) => {
        $(".loading__title, .loading__sub-title").fadeOut(1000, resolve);
    });

    const fadeOutLoad = () => new Promise((resolve) => {
        $(".js-load").fadeOut(1000, resolve);
    });

    const showLoader = () => new Promise((resolve) => {
        const loader = document.querySelector('.js-loader');
        loader.style.display = 'flex';
        resolve();
    });

    const startAnimations = () => new Promise((resolve) => {
        const turtleImages = document.querySelectorAll('.loading__turtle-image');
        turtleImages.forEach((image) => {
            image.style.animationPlayState = 'running';
        });
        setTimeout(resolve, 1500); // アニメーションの完了を待つ
    });

    const showFullImage = () => new Promise((resolve) => {
        const content = document.querySelector('.js-content');
        content.style.display = 'block';
        setTimeout(() => {
            resolve();
        }, 1500); // 全体画像表示後の遅延
    });

    const showOverlayText = () => new Promise((resolve) => {
        const overlayText = document.querySelector('.js-overlay-text');
        overlayText.style.opacity = '1';
        setTimeout(resolve, 500); // Overlay text display delay (遅延を短く調整)
    });

    const hideLoaderShowContent = () => new Promise((resolve) => {
        const loader = document.querySelector('.js-loader');
        const content = document.querySelector('.js-content');
        const turtleImage = document.querySelector('.loading__turtle-full-image');
        const whiteBg = document.querySelector('.js-white-bg');

        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none'; // ローダーを非表示にする
            setTimeout(() => {
                turtleImage.classList.add('fade-out');
                setTimeout(() => {
                    whiteBg.style.opacity = '0'; // 白い背景をフェードアウト
                    turtleImage.style.opacity = '0'; // turtleImageをフェードアウト
                    content.style.opacity = '0'; // contentをフェードアウト
                    setTimeout(() => {
                        if (whiteBg.parentNode) {
                            whiteBg.parentNode.removeChild(whiteBg); // 白い背景をDOMから削除
                        }
                        if (turtleImage.parentNode) {
                            turtleImage.parentNode.removeChild(turtleImage); // turtleImageをDOMから削除
                        }
                        if (content.parentNode) {
                            content.parentNode.removeChild(content); // contentをDOMから削除
                        }
                        const loading = document.querySelector('.loading');
                        if (loading && loading.parentNode) {
                            loading.parentNode.removeChild(loading); // 全体のローディングをDOMから削除
                        }
                        resolve();
                    }, 500); // 白い背景とturtleImageとcontentのフェードアウトを待つ
                }, 1000); // Wait for the fade-out to complete
            }, 500); // Delay before fading out the turtle image
        }, 500); // Adjust the fade-out duration if needed
    });

    fadeOutText()
        .then(fadeOutLoad)
        .then(showLoader)
        .then(startAnimations)
        .then(showFullImage)
        .then(showOverlayText)
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

            // クラス js-content の display を block に設定
            const contentElement = document.querySelector('.js-content');
            if (contentElement) {
                contentElement.style.display = 'block';
                contentElement.style.opacity = '1'; // contentを表示
            }

            // クラス fv の display を block に設定
            const fvElement = document.querySelector('.fv');
            if (fvElement) {
                fvElement.style.display = 'block';
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
      600: {
        slidesPerView: 2.2,
        spaceBetween: 30,
      },
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

//resizeイベント
$(window).resize(function () {
  if (window.matchMedia("(min-width: 769px)").matches) {
    closeDrawer();
  }
});

function openDrawer() {
  $(".js-sp-nav").fadeIn();
  $(".js-hamburger").addClass("is-open");
}

function closeDrawer() {
  $(".js-sp-nav").fadeOut();
  $(".js-hamburger").removeClass("is-open");
}

