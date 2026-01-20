export function initSmoothScroll() {
  const buttonScroll = document.querySelector(".scroll-prompt");
  const aboutSection = document.getElementById("about");

  buttonScroll.addEventListener("click", function () {
    aboutSection.scrollIntoView({
      behavior: "smooth",
    });
  });
}
