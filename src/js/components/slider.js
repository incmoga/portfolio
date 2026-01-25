import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function initSlider() {
  const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Autoplay],
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  speed: 3000,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
}

