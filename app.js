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
        "read": false
        },
    {
        "title": "goofy movie",
        "author": "don shmuck",
        "pages": "69",
        "read": false
            }
    ];

// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = Boolean(read);
// }

const container = document.querySelector('#container');

function createBookCards () {
    for (let i=0; i<library.length; i++) {
        const book = document.createElement('div');
            book.classList.add('book');
        const title = document.createElement('div');
            title.classList.add('title');
            title.textContent= library[i].title;
        const author = document.createElement('div');
            author.classList.add('author');
            author.textContent = library[i].author;
        const pages = document.createElement('div');
            pages.classList.add('author');
            pages.textContent = `${library[i].pages} pages`;
        const read = document.createElement("INPUT");
            read.setAttribute("type","checkbox");
        const readLabel = document.createElement('div');
            readLabel.textContent = "Read?";      
        
        container.appendChild(book);
        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(pages);
        book.appendChild(readLabel);
        readLabel.appendChild(read);
}
}

createBookCards();

