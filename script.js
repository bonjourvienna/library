const btnOpenModal = document.getElementById("addBookBtn");
const btnCloseModal = document.querySelector(".btn--close-modal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const booksContainer = document.getElementById("books-container");
const bookCard = document.getElementById("book-card");

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnOpenModal.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
