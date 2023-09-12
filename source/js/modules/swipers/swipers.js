let init = false;
let tourSlide = document.querySelector('.tour__swiper-slide');
let tourSlideBackground = document.querySelector('.tour__background');

const heroSwiper = new Swiper('.hero__swiper', {
  slidesPerView: 1,

  pagination: {
    el: '.hero__swiper-pagination',
    type: 'bullets',
    bulletElement: 'div',
    bulletActiveClass: 'hero__swiper-bullet--active',
    bulletClass: 'hero__swiper-bullet',
    clickableClass: 'hero__swiper-bullet--clickable',
    currentClass: 'hero__swiper-bullet--current',
    clickable: true,
  },
});

const tourSwiper = new Swiper('.tour__swiper', {
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },

  navigation: {
    nextEl: '.tour__swiper-button--next',
    prevEl: '.tour__swiper-button--prev',
    disabledClass: 'tour__swiper-button--disabled',
  },
});

const trainingSwiper = new Swiper('.training__swiper', {
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },

  navigation: {
    nextEl: '.training__swiper-button--next',
    prevEl: '.training__swiper-button--prev',
    disabledClass: 'training__swiper-button--disabled',
  },
});

const reviewsSwiper = new Swiper('.reviews__swiper', {
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },

  navigation: {
    nextEl: '.reviews__swiper-button--next',
    prevEl: '.reviews__swiper-button--prev',
    disabledClass: 'reviews__swiper-button--disabled',
  },
});

function swiperCard() {
  if (window.innerWidth >= 1200) {
    if (!init) {
      init = true;
      const advantagesSwiper = new Swiper('.advantages__swiper', {
        loop: true,
        initialSlide: 1,
        breakpoints: {
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          }
        },

        navigation: {
          nextEl: '.advantages__swiper-button--next',
          prevEl: '.advantages__swiper-button--prev',
          disabledClass: 'advantages__swiper-button--disabled',
        },
      });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}

swiperCard();
window.addEventListener('resize', swiperCard);

const gallerySwiper = new Swiper('.gallery__swiper', {
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
  },

  navigation: {
    nextEl: '.gallery__swiper-button--next',
    prevEl: '.gallery__swiper-button--prev',
    disabledClass: 'gallery__swiper-button--disabled',
  },
});
