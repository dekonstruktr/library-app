const myLibrary = [];
const bookListDiv = document.querySelector('#booklistDiv');
const newTitle = document.querySelector('#newTitle');
const newAuthor = document.querySelector('#newAuthor');
const newPages = document.querySelector('#newPages');
const newBookDiv = document.createElement("div");
const form = document.querySelector('#bookForm');

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = 'Not Read';
    }
    info() { return `${this.title} by ${this.author}, ${this.pages} pages.`; }
}






//adds book objects to library array
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    clearInput();
}


addBookToLibrary("Poop Money", "John Johnson", "5000", "read");
addBookToLibrary("blah baa", "Jeff RR Tolkien", "50", "not read");
addBookToLibrary("Oucbook", "Jsdfsdf", "10", "read");
addBookToLibrary("Ugly Book", "sn", "5000", "read");
updateList();

function updateList() {
    bookListDiv.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {

        // let newBookDiv = document.createElement("div");
        // bookListDiv.appendChild(newBookDiv);
        // newBookDiv.className = "bookCard";

        // newBookDiv.textContent = myLibrary[i].info();
        // newBookDiv.setAttribute('id', i);

        // linebreak = document.createElement("br");
        // newBookDiv.appendChild(linebreak);
        // linebreak = document.createElement("br");

        // newBookDiv.appendChild(linebreak);
        // let deleteBtn = document.createElement('button');
        // deleteBtn.textContent = 'Remove';
        // deleteBtn.setAttribute('id', "btn-" + ([i]));

        // newBookDiv.appendChild(deleteBtn);
        // bookListDiv.appendChild(newBookDiv);

        let newBookDiv = document.createElement("div");
        bookListDiv.appendChild(newBookDiv);
        newBookDiv.className = "bookCard";
        newBookDiv.textContent = myLibrary[i].info();
        newBookDiv.setAttribute('id', "book-" + i);

        linebreak = document.createElement("br");
        newBookDiv.appendChild(linebreak);
        linebreak = document.createElement("br");

        newBookDiv.appendChild(linebreak);
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Remove';
        deleteBtn.className = 'close';
        deleteBtn.setAttribute('id', "btn-" + i);
        newBookDiv.appendChild(deleteBtn);

        let readBtn = document.createElement('div');
        readBtn.textContent = myLibrary[i].read;
        readBtn.className = 'readStatus';
        readBtn.classList.add('notRead');
        readBtn.setAttribute('id', "readBtn-" + (i));
        newBookDiv.appendChild(readBtn);
        bookListDiv.appendChild(newBookDiv);
    }
}



form.addEventListener('submit', (event) => {
    event.preventDefault();

    addBookToLibrary(newTitle.value, newAuthor.value, newPages.value);

    updateList2();
    modal.style.display = "none";

});

function updateList2() {



    let newBookDiv = document.createElement("div");
    bookListDiv.appendChild(newBookDiv);
    newBookDiv.className = "bookCard";
    newBookDiv.textContent = myLibrary[myLibrary.length - 1].info();
    newBookDiv.setAttribute('id', "book-" + (myLibrary.length - 1));

    linebreak = document.createElement("br");
    newBookDiv.appendChild(linebreak);
    linebreak = document.createElement("br");

    newBookDiv.appendChild(linebreak);
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Remove';
    deleteBtn.className = 'close';
    deleteBtn.setAttribute('id', "btn-" + (myLibrary.length - 1));
    newBookDiv.appendChild(deleteBtn);
    let readBtn = document.createElement('div');
    readBtn.textContent = myLibrary[myLibrary.length - 1].read;
    readBtn.className = 'readStatus';
    readBtn.classList.add('notRead');
    readBtn.setAttribute('id', "readBtn-" + (myLibrary.length - 1));
    newBookDiv.appendChild(readBtn);
    bookListDiv.appendChild(newBookDiv);
    // let readBtn = document.createElement('button');
    // readBtn.textContent = myLibrary[myLibrary.length - 1].read;
    // readBtn.className = 'notRead';
    // readBtn.setAttribute('id', "readBtn-" + (myLibrary.length - 1));
    // newBookDiv.appendChild(readBtn);
    // bookListDiv.appendChild(newBookDiv);


}
//Read Status Event Listener
document.getElementById("booklistDiv").addEventListener("click", function(e) {

    if (e.target && e.target.className == "readStatus notRead") {

        e.target.classList.toggle('read');
        e.target.classList.toggle('notRead');
        e.target.textContent = 'Read';

    } else if (e.target && e.target.className == "readStatus read") {
        e.target.classList.toggle('read');
        e.target.classList.toggle('notRead');
        e.target.textContent = 'Not Read';
    }
});

// document.querySelectorAll(".readStatus").forEach(item => {
//     item.addEventListener('click', event => {
//         item.classList.toggle('read');
//         item.classList.toggle('notRead');
//         (item.textContent === 'Not Read') ? item.textContent = 'Read': item.textContent = 'Not Read';

//     })

// });

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementById("closeBtn");

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    console.log("click");
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function deleteItem(x) {
    myLibrary.splice(x, 1);
    console.log(myLibrary);
    bookListDiv.innerHTML = "";
    updateList();
}

bookListDiv.addEventListener('click', (e) => {
    const isButton = e.target.nodeName === 'BUTTON';
    if (!isButton) {
        return
    }
    let Item = e.target.id;
    delItem = Item.slice(4);
    console.log(delItem)
    deleteItem(delItem);
})



function clearInput() {
    newTitle.value = '';
    newAuthor.value = '';
    newPages.value = '';
}