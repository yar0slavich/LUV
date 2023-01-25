window.addEventListener('scroll', e =>{
  document.body.style.cssText = `--scrollTop: ${this.scrollY}px`;
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    slidesPerView: 3,
    speed: 1200,
    effect: 'coverflow',

    breakpoints: {
      // when window width is >= 640px
      787: {
        spaceBetween: 100
      },
      // when window width is >= 320px
      320: {
        spaceBetween: 0
      },
    },
});