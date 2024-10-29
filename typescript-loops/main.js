'use strict';
/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            sumArray,
            reverseString,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log(getNumbersToTen());
function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log(getEvenNumbersToTwenty());
function repeatWord(word, times) {
  let repeated = ' ';
  let count = 1;
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}
function logEachCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}
function doubleAll(numbers) {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
function sumArray(numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
    // This is adding the value of num to sum and returning the result to the variable sum.
  }
  return sum;
}
function reverseString(str) {
  let reversed = ' ';
  for (const char of str) {
    reversed = char + reversed;
  }
  return reversed;
}
function getKeys(obj) {
  const keys = [];
  for (const key in obj) {
    keys.push(key);
    // The push method of the key object is being called with one argument a key.
    // That is being pushed into the key variable array.
    // Here the for in loop is looping through the objects key values.
    // So we can use this in multiple scenarios we have a record of a object that is a string and is unknown.
    // This is meant to give us the option of entering any values into the functions key object.
  }
  return keys;
}
function getValues(obj) {
  const values = [];
  for (const key in obj) {
    values.push(obj[key]);
    // Here I am accessing using bracket notation the key values of the object.
    // I am pushing the values of the object into the values array which is yet undefined , unknown.
  }
  return values;
}
