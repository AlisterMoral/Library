let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleReadStatus = function() {
  this.read = !this.read;
};

function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function displayBooks() {
  let container = document.getElementById("book-container");
  removeAllChildNodes(container);

  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];

    let bookElement = document.createElement("div");
    bookElement.className = "book-card";

    let titleElement = document.createElement("h3");
    titleElement.textContent = book.title;

    let authorElement = document.createElement("p");
    authorElement.textContent = "Author: " + book.author;

    let pagesElement = document.createElement("p");
    pagesElement.textContent = "Pages: " + book.pages;

    let readElement = document.createElement("p");
    readElement.textContent = "Read: " + (book.read ? "Yes" : "No");

    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.setAttribute("data-index", i);
    removeButton.addEventListener("click", removeBook);

    let toggleReadButton = document.createElement("button");
    toggleReadButton.textContent = "Toggle Read";
    toggleReadButton.setAttribute("data-index", i);
    toggleReadButton.addEventListener("click", toggleReadStatus);

    bookElement.appendChild(titleElement);
    bookElement.appendChild(authorElement);
    bookElement.appendChild(pagesElement);
    bookElement.appendChild(readElement);
    bookElement.appendChild(removeButton);
    bookElement.appendChild(toggleReadButton);

    container.appendChild(bookElement);
  }
}

function removeBook(event) {
  let index = event.target.getAttribute("data-index");
  myLibrary.splice(index, 1);
  displayBooks();
}

function toggleReadStatus(event) {
  let index = event.target.getAttribute("data-index");
  let book = myLibrary[index];
  book.toggleReadStatus();
  displayBooks();
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

let newBookBtn = document.getElementById("new-book-btn");
let newBookForm = document.getElementById("new-book-form");

newBookBtn.addEventListener("click", function() {
  newBookForm.style.display = "block";
});

let bookForm = document.getElementById("book-form");

bookForm.addEventListener("submit", function(event) {
  event.preventDefault();

  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;

  addBookToLibrary(title, author, pages, read);

  displayBooks();

  bookForm.reset();

  newBookForm.style.display = "none";
});

addBookToLibrary("Book 1", "Author 1", 200, true);
addBookToLibrary("Book 2", "Author 2", 300, false);
addBookToLibrary("Book 3", "Author 3", 150, true);

displayBooks();