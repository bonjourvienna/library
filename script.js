const btnOpenModal = document.getElementById("addBookBtn");
const btnCloseModal = document.querySelector(".btn--close-modal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const bookCard = document.querySelectorAll(".book-card");
const modalForm = document.querySelector("form.modal__form");
const btnsStatus = document.querySelectorAll('input[type="button"]');
const submitForm = document.querySelector(".submit");
const library = document.querySelector(".books-container");
const removeBtn = document.querySelector("removeBtn");
const myLibrary = [];
let statusChosen = "";

class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
}

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

function getBookStatus(status) {
  if (status === btnsStatus[0].value)
    return btnsStatus[0].getAttribute("class");
  else if (status === btnsStatus[1].value)
    return btnsStatus[1].getAttribute("class");
  else if (status === btnsStatus[2].value)
    return btnsStatus[2].getAttribute("class");
  else return "";
}

function updateStatus(book, statusBtn) {
  const btns = document.querySelectorAll(".toggler");
  btns.forEach((btn) => {
    if (statusBtn.value === btnsStatus[0].value) {
      btn.classList.replace(btnsStatus[0].className, btnsStatus[1].className);
      btn.textContent = btnsStatus[1].value;
    } else if (statusBtn.value === btnsStatus[1].value) {
      btn.classList.replace(btnsStatus[0].className, btnsStatus[2].className);
      btn.textContent = btnsStatus[2].value;
    } else {
      btn.textContent = btnsStatus[0].value;
      btn.classList.replace(btnsStatus[0].className, btnsStatus[0].className);
    }
  });
  book.status = statusBtn.value;
}

function createNewBook() {
  const bookTitle = modalForm.elements.namedItem("title").value;
  const authorName = modalForm.elements.namedItem("author").value;
  const pages = modalForm.elements.namedItem("pages").value;

  const bookId = `book${Object.keys(myLibrary).length + 1}`;
  const book = new Book(bookTitle, authorName, `${pages} pages`, statusChosen);

  myLibrary[bookId] = book;
  createBookCard(book, statusChosen);
}

function createBookCard(book, status) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");

  const title = document.createElement("p");
  title.textContent = `"${book.title}"`;
  bookCard.appendChild(title);

  const author = document.createElement("p");
  author.textContent = `${book.author}`;
  bookCard.appendChild(author);

  const pages = document.createElement("p");
  pages.textContent = `${book.pages}`;
  bookCard.appendChild(pages);

  const statusBtn = document.createElement("button");
  statusBtn.setAttribute("class", getBookStatus(status));
  statusBtn.textContent = status;
  statusBtn.classList.add("toggler", "btn");
  bookCard.appendChild(statusBtn);
  statusBtn.addEventListener("click", updateStatus(status, status));

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("btn", "removeBtn");
  bookCard.appendChild(removeBtn);
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", () => {
    removeBook(book);
    bookCard.remove();
  });
  library.appendChild(bookCard);
}

function removeBook(books) {
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const index = myLibrary.indexOf[book];
    if (index !== -1) {
      myLibrary.splice(index, 1);
    }
  }
}

const newBook = (e) => {
  e.preventDefault();
  const newBook = createNewBook();
  createBookCard(newBook, statusChosen);
};
modalForm.addEventListener("submit", newBook);
btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
btnsStatus.forEach((btn) => {
  btn.addEventListener("click", () => (statusChosen = btn.value));
});
