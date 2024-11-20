'use strict';
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(numbers);
const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];
console.log(names);
const evenNum = numbers.filter((n) => n % 2 === 0);
console.log('Filter even', evenNum);
const nameD = names.filter(() => !names.includes('D') && !names.includes('d'));
console.log('D', nameD);
