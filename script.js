const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function(){
    this.read = !this.read;
}

function toggleRead(index){
    myLibrary[index].toggleRead();
    showLibrary();
}

function showLibrary(){
    let libraryBook = document.querySelector("#library");
    libraryBook.innerHTML= "";
    for(let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.setAttribute("class", "book-card");
        bookEl.innerHTML = `
            <div class="holder">
                <h3 id="book-title">${book.title}</h3>
                <h5 id="book-author">by ${book.author}</h5>
            <div>
            <div class="holder-body">
                <p>${book.pages} pages</p>
                <p id="read-status">${book.read ? "Finish" : "Not Finish"}</p>
                <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
                <button class="toggle-read-btn" onclick="toggleRead(${i})">Read</button>
            </div>           
        `;
        libraryBook.appendChild(bookEl);
    }
}

function removeBook(index){
    myLibrary.splice(index, 1);
    showLibrary();
}

function addBookToLibrary(){
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    showLibrary();
}

let newBookbtn = document.querySelector("#new-book-btn");
newBookbtn.addEventListener("click", function(){
    let newBookForm = document.querySelector("#new-book-form");
    newBookForm.style.display = "flex";
})

document.querySelector("#new-book-form").addEventListener("submit", function(event){
    event.preventDefault();
    addBookToLibrary();
});