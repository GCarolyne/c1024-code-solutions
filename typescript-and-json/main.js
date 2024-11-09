'use strict';
const books = [
  {
    isbn: '777888',
    title: 'The Signalman',
    author: 'Charles Dickens',
  },
  {
    isbn: '888999',
    title: 'IQ84',
    author: 'Haruki Murakami',
  },
  {
    isbn: '000777',
    title: 'Dorian Gray',
    author: 'Oscar Wilde',
  },
];
console.log('value of books', books);
console.log('the type of', typeof books);
const jsonBooks = JSON.stringify(books);
console.log('jsonBooks', jsonBooks);
console.log('the type of', typeof jsonBooks);
const studentJSON = '{"numberID":"900.989.88","string name":"Alfred"}';
console.log('studentJSON', studentJSON);
console.log('the type of', typeof studentJSON);
const studObj = JSON.parse(studentJSON);
console.log('studObj', studObj);
console.log('the type of', typeof studObj);
