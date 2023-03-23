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

// Анимашка при скролле
function onEntry(entry) {
  entry.forEach((change) => {
    // Если элемент в зоне видимости, то класс добавляется
    if (change.isIntersecting) {
      change.target.classList.add('title__show');
    }
    // Если элемент пропал из зоны видимости, то класс убирается
    else {
      change.target.classList.remove('title__show');
    }
  });
}

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.title__animation');

for (let elm of elements) {
  observer.observe(elm);
}
