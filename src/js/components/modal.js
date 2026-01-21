export function initModal() {
  const priceBtn = document.querySelectorAll(".price__btn");
  const modalWindow = document.querySelector(".modal-window");
  const closeModalBtn = document.querySelector(".modal-window__close");

  function openModal() {
    modalWindow.showModal();
    document.body.classList.add("no-scroll");
  }

  function closeModal() {
    modalWindow.close();
    document.body.classList.remove("no-scroll");
  }

  priceBtn.forEach((button) => {
    button.addEventListener("click", openModal);
  });

  closeModalBtn.addEventListener("click", closeModal);

  modalWindow.addEventListener("click", (e) => {
    if (e.target === modalWindow) {
      closeModal();
    }
  });
}
