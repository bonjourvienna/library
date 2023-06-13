const btnOpenModal = document.getElementById("addBookBtn");
const btnCloseModal = document.querySelector(".btn--close-modal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const bookCard = document.querySelectorAll(".book-card");
const modalForm = document.querySelector("form.modal__form");
const BookStatusBtn = document.querySelectorAll(".Btn-Status");
const BtnsStatus = document.querySelectorAll('input[type="button"]');
const submitForm = document.querySelector(".submit");
const library = document.querySelector(".books-container");

const books = {};

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

function createNewBook(e) {
  e.preventDefault();
  const bookTitle = modalForm.elements.namedItem("title").value;
  const AuthorName = modalForm.elements.namedItem("author").value;
  const Pages = modalForm.elements.namedItem("pages").value;
  const readingStatus = () => {
    if (this.value) return (book.status = this.value);
  };

  const book = {
    title: bookTitle,
    author: AuthorName,
    pages: Pages,
    status: "",
  };
  const bookId = `book${Object.keys(books).length + 1}`;
  books[bookId] = book;
  console.log(book);
  console.log(books);
}

function getStatus() {
  if (this.value) {
    console.log(this.value);
  }
}

function createBookCard(book) {
  const bookCard = document.createElement("div");
  const title = document.createElement("p");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const status = document.createElement("button");

  bookCard.classList.add("book-card");

  title.textContent = `"${book.title}"`;
  author.textContent = `${book.author}`;
  pages.textContent = `${book.pages}`;

  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(status);

  return bookCard;
}

function EditReadingStatus() {
  if (this.classList.contains("bg-red-400")) {
    this.classList.remove("bg-red-400");
    this.classList.add("bg-yellow-400");
    this.textContent = BtnsStatus[1].value;
  } else if (this.classList.contains("bg-yellow-400")) {
    this.classList.remove("bg-yellow-400");
    this.classList.add("bg-green-400");
    this.textContent = BtnsStatus[2].value;
  } else if (this.classList.contains("bg-green-400")) {
    this.classList.remove("bg-green-400");
    this.classList.add("bg-red-400");
    this.textContent = BtnsStatus[0].value;
  }
}

function addBookToLibrary(e) {
  e.preventDefault();
}

modalForm.addEventListener("submit", createNewBook);
btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
BookStatusBtn.forEach((btn) =>
  btn.addEventListener("click", EditReadingStatus)
);
BtnsStatus.forEach((btn) => btn.addEventListener("click", getStatus));
