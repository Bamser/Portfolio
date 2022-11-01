const swiper = new Swiper('.swiper', {
    loop: true,
  slidesPerView: 3,
  slidesPerGroup: 3,
  speed: 1500,
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });