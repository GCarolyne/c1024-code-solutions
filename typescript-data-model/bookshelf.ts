interface Book {
  isbn: string;
  title: string;
  author: string;
}
const bookshelf: Book[] = [
  {
    isbn: '978-1491929483',
    title:
      'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett',
  },
  {
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson',
  },
  {
    isbn: '978-0692232699',
    title:
      "Build APIs You Won't Hate: Everyone and their dog wants an API, so you should probably learn how to build them",
    author: 'Phil Sturgeon & Laura Bohill',
  },
];
const secondAuthor: string = bookshelf[1].author;
const firstIsbn: string = bookshelf[0].isbn;
const thirdBookName: string = bookshelf[2].title;
console.log('The author of the second book is', secondAuthor);
console.log('The first book ISBN is', firstIsbn);
console.log('The title of the third book is', thirdBookName);
