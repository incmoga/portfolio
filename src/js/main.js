import { initMobileMenu } from "./components/mobile-menu.js";
import { initSmoothScroll } from "./components/smooth-scroll.js";
import { initAccordeon } from "./components/accordeon.js";
import { initModal } from "./components/modal.js";

document.addEventListener("DOMContentLoaded", () => {
  initAccordeon();
  initMobileMenu();
  initModal();
  initSmoothScroll();
});
