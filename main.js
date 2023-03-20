const swiper = new Swiper('.swiper', {
  loop: false,
  speed: 1000,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
    780: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
  },

  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },
});
