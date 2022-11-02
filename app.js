const library = [
    {
        "title": "Sirens of Titan",
        "author": "Kurt Vonnegut",
        "pages": "666",
        "read": true
    },
    {
        "title": "Cat's Cradle",
        "author": "Kurrt Vonnnegut",
        "pages": "999",
        "read": true
        },
    {
        "title": "goofy movie",
        "author": "don shmuck",
        "pages": "69",
        "read": false
            }
    ];

const resetBookCards = () => {
    document.getElementById('container').innerHTML = '';
}

class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = isRead;
    }
}

const getBookFromInput = () => {
    const title = document.getElementById('bookTitle').value
    const author = document.getElementById('bookAuthor').value
    const pages = document.getElementById('bookPages').value
    const isRead = document.getElementById('bookRead').checked
    return new Book(title, author, pages, isRead)
  }


function openForm() {
    document.getElementById("formContainer").style.display = "block";
  }
  
function closeForm() {
    document.getElementById("formContainer").style.display = "none";
  }


const container = document.querySelector('#container');

function createBookCards () {
    for (let i=0; i<library.length; i++) {
        const book = document.createElement('div');
            book.classList.add('book', `book-${[i]}`);
            book.id = `book-${[i]}`;
            let bookIndex = i;
            console.log(bookIndex);
        const title = document.createElement('div');
            title.classList.add('title', 'bookContent');
            title.textContent= library[i].title;
        const author = document.createElement('div');
            author.classList.add('author', 'bookContent');
            author.textContent = library[i].author;
        const pages = document.createElement('div');
            pages.classList.add('author', 'bookContent');
            pages.textContent = `${library[i].pages} pages`;
        const readBtn = document.createElement("button");
            readBtn.classList.add('readBtn', 'bookContent');
            if (library[i].read === true) {
            readBtn.textContent = "Read"; 
            readBtn.style.backgroundColor = 'green';
            } else {
            readBtn.textContent = "Not Read"; 
            readBtn.style.backgroundColor = 'gray';
            }
            readBtn.addEventListener ('click', function() {
                const color = event.target.style.backgroundColor
                if (color === 'green') {
                    event.target.style.backgroundColor = 'gray';
                    event.target.textContent = "Not Read";
                } else {
                    event.target.style.backgroundColor = 'green';
                    event.target.textContent = "Read";
                }
            })
        const closeBtn = document.createElement("button");
            closeBtn.textContent = "Remove";
            closeBtn.addEventListener('click', function () {
                let element = document.getElementById(`book-${bookIndex}`);
                element.remove();
                library.splice(bookIndex,1);
                console.log(library);
            });
        
        container.appendChild(book);
        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(pages);
        book.appendChild(readBtn);
        book.appendChild(closeBtn);

    }
}

const addBook = (ev) => {
    ev.preventDefault();
    const newBook = getBookFromInput();
    library.push(newBook);
    resetBookCards();
    createBookCards();
    closeForm();
}

document.getElementById('submit').addEventListener('click',addBook);



createBookCards();

