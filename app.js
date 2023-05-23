let myLibrary = [];

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

function addBookToLibrary() {
  let title = prompt("Enter the book title:");
  let author = prompt("Enter the author:");
  let year = prompt("Enter the publication year:");

  let newBook = new Book(title, author, year);

  myLibrary.push(newBook);

  console.log("Book added successfully!");
}

function displayBooks() {
  let container = document.getElementById("book-container");
  container.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];

    let bookElement = document.createElement("div");
    bookElement.className = "book-card"; 

    let titleElement = document.createElement("h3");
    titleElement.textContent = book.title;

    let authorElement = document.createElement("p");
    authorElement.textContent = "Author: " + book.author;

    let yearElement = document.createElement("p");
    yearElement.textContent = "Year: " + book.year;

    bookElement.appendChild(titleElement);
    bookElement.appendChild(authorElement);
    bookElement.appendChild(yearElement);

    container.appendChild(bookElement);
  }
}