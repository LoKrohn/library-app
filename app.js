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
            title.classList.add('title', 'bookContent');
            title.textContent= library[i].title;
        const author = document.createElement('div');
            author.classList.add('author', 'bookContent');
            author.textContent = library[i].author;
        const pages = document.createElement('div');
            pages.classList.add('author', 'bookContent');
            pages.textContent = `${library[i].pages} pages`;
        const readBtn = document.createElement("button");
            readBtn.textContent = "Read"; 
            readBtn.classList.add('readBtn', 'bookContent');
            readBtn.style.backgroundColor = 'green';
            readBtn.addEventListener ('click', function() {
                const color = event.target.style.backgroundColor
                if (color === 'green') {
                    event.target.style.backgroundColor = 'red';
                    event.target.textContent = "Not Read";
                } else {
                    event.target.style.backgroundColor = 'green';
                    event.target.textContent = "Read";
                }
            })
        
        container.appendChild(book);
        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(pages);
        book.appendChild(readBtn);

    }
}




createBookCards();

