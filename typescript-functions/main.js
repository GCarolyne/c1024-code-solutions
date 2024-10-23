'use strict';
function convertMinutesToSeconds(minutes) {
  const MinutesToSeconds = minutes * 60;
  return MinutesToSeconds;
}
convertMinutesToSeconds(5);
console.log('The amount of seconds in minutes is:', convertMinutesToSeconds(5));
function greet(name) {
  const greeting = 'Hello' + ' ' + 'have a beautiful day ' + name;
  return greeting;
}
console.log('The value of the name in greeting:', greet('Carolyne'));
const getArea = (width, height) => width * height;
console.log('The result of the area measurements', getArea(20, 50));
const person = {
  firstName: 'Carolyne',
  lastName: 'Golias',
};
const getFirstName = (person) => person.firstName;
console.log('The first name of the person is:', getFirstName(person));
const array = ['tomatoes', 'pineapple', 'grape'];
const getLastElement = (array) => array[array.length - 1];
console.log('The last index of the array is:', getLastElement(array));
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
console.log(
  'The other function called is:',
  callOtherFunction(convertMinutesToSeconds, 10)
);
