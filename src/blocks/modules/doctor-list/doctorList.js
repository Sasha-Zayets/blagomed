import Swiper from 'swiper';

const slider = new Swiper('.js-doctor-slider', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1500: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        }
    } 
});