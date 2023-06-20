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
const removeBtn = document.querySelector("removeBtn");
let statusChosen = "";
const myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

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
  const authorName = modalForm.elements.namedItem("author").value;
  const pages = modalForm.elements.namedItem("pages").value;

  const book = new Book(bookTitle, authorName, `${pages} pages`, statusChosen);

  const bookId = `book${Object.keys(myLibrary).length + 1}`;
  myLibrary[bookId] = book;
  console.log(book);
  console.log(myLibrary);
}

function createBookCard(book) {
  const bookCard = document.createElement("div");
  const title = document.createElement("p");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const readingStatus = document.createElement("button");
  const removeBtn = document.createElement("button");

  bookCard.classList.add("book-card");
  removeBtn.classList.add("removeBtn");

  title.textContent = `"${book.title}"`;
  author.textContent = `${book.author}`;
  pages.textContent = `${book.pages}`;

  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(removeBtn);

  if (book["readingStatus"] === BtnsStatus[0].value) {
    readingStatus.classList.add("bg-red-400");
    bookCard.appendChild(readingStatus);
  } else if (book["readingStatus"] === BtnsStatus[1].value) {
    readingStatus.classList.add("bg-yellow-400");
    bookCard.appendChild(readingStatus);
  } else if (book["readingStatus"] === BtnsStatus[2].value) {
    readingStatus.classList.add("bg-green-400");
    bookCard.appendChild(readingStatus);
  }
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

function addBookToLibrary(book) {
  // library.push(book);
}

function removeBook() {}

modalForm.addEventListener("submit", createNewBook);
modalForm.addEventListener("submit", addBookToLibrary);
btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
// removeBtn.addEventListener("click", removeBook);
BookStatusBtn.forEach((btn) =>
  btn.addEventListener("click", EditReadingStatus)
);
BtnsStatus.forEach((btn) => {
  btn.addEventListener("click", () => (statusChosen = btn.value));
});
