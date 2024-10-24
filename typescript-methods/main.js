'use strict';
const heroes = ['Thor', 'Venus', 'Zeus', 'Aphrodite'];
let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('The value of randomIndex', randomIndex);
const randomHero = heroes[randomIndex];
console.log('The value of randomHero', randomHero);
const library = [
  {
    title: 'Picture Of Dorian Gray',
    author: 'Oscar Wilde',
  },
  {
    title: 'The selfish Giant',
    author: 'Oscar Wilde',
  },
  {
    title: 'The Doors of Perception',
    author: 'Aldous Huxley ',
  },
];
const lastBook = library.pop();
console.log('The value of lastBook', lastBook);
const firstBook = library.shift();
console.log('The value of first book is:', firstBook);
const js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr.Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('The value of library is now:', library);
const fullName = 'Carolyne' + ' ' + 'Golias';
const firstAndLastName = fullName.split(' ');
console.log('The value of name is:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('Say my name upper case', sayMyName);
const employee = {
  name: 'John Maker',
  age: 22,
  position: 'leather craftsman',
};
const employeeKeys = Object.keys(employee);
console.log('employeekeys', employeeKeys);
const employeeValues = Object.values(employee);
console.log('employeevalues', employeeValues);
const employeePairs = Object.entries(employee);
console.log('employee pairs', employeePairs);
