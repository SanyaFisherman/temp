const swiper1 = new Swiper('.team__slider', {  
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    pagination: {
        el: '.team__pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.team__arrow--next',
        prevEl: '.team__arrow--prev'
    },
});