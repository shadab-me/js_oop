class BookList {
    constructor(books){
        this.books = books;
        this.notRead = books.length;
        this.readBook = 0;
        this.currentBook = books[0]
        this.nextBook = books[this.currentBook+1];
        this.lastRead = 0;
    }
    addBook(book){
        this.books.push(book);
    }
    finishCurrentBook(){
         console.log(this.books)
    }
 }
class Book{
  constructor(title, genre, author){
      this.title = title;
      this.genre = genre;
      this.author = author;
      this.read = false;
   }
}

let firstBook = new Book('shadab', 'ali', 'khan');
let secondBook = new Book('s', 'shhhs', 'shhs');
let thirdBook = new Book('li', 'khan', 'hi');
let fourthBook = new Book('he', 'ali', 'khan');
let fifthBook = new Book('s', 'shhhs', 'shhs');
let sixBook = new Book('li', 'khan', 'hi');

let seven = new Book('shhs', 'hsh', )
let newList = new BookList([firstBook, secondBook, thirdBook, fourthBook, fifthBook, sixBook]);
newList.addBook(secondBook);