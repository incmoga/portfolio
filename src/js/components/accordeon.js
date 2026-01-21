export function initAccordeon() {
  const faqItem = document.querySelectorAll(".faq__item");

  faqItem.forEach(function (item) {
    const question = item.querySelector(".faq__question");

    question.addEventListener("click", function () {
      if (item.classList.contains("faq__item--active")) {
        item.classList.remove("faq__item--active");
      } else {
        const otherItems = document.querySelectorAll(".faq__item");
        otherItems.forEach(function (other) {
          other.classList.remove("faq__item--active");
        });

        item.classList.add("faq__item--active");
      }
    });
  });
}
