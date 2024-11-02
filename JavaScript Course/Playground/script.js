


const myLibrary = [];

function Bok (title,  author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

Bok.prototype.print = function () {
    console.log(this);
}



const bok1 = new Bok('American Psycho', 'Brett Easton Ellis', 400, false);
const bok2 = new Bok('Den allvarsamma leken', 'Hjalmar Söderberg', 350, true);

bok1.print();
bok2.print();

addBookToLibrary(bok1);
addBookToLibrary(bok2);

function addBookToLibrary (book) {
    myLibrary.push(book);

}

console.table(myLibrary)
