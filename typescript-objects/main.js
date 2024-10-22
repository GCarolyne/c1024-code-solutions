'use strict';
const student = {
  firstName: ' Carolyne ',
  lastName: ' Golias ',
  age: 99,
};
const firstName = student.firstName;
console.log('the students first name is', firstName);
const lastName = student.lastName;
console.log('the students last name', lastName);
const fullName = student.firstName + '  ' + student.lastName;
console.log('The value of fullName', fullName);
student.livesInIrvine = true;
student.previousOccupation = 'caregiver';
console.log('This student lives in Irvine', student.livesInIrvine);
console.log(
  'The previous occupation of this student was:',
  student.previousOccupation
);
console.log('The value of the student object is', student);
console.log('the typeof student', typeof student);
const vehicle = {
  make: 'Jeep',
  model: 'Cherokee',
  year: 2021,
};
vehicle['color'] = 'blue';
vehicle['isConvertible'] = false;
console.log('The color of the vehicle', vehicle['color']);
console.log('Is it a convertible', vehicle['isConvertible']);
console.log('The value of the vehicle object', vehicle);
console.log('The type of vehicle', typeof vehicle);
const pet = {
  name: 'foxy',
  kind: 'husky',
};
delete pet.name;
delete pet.kind;
console.log('The value of the pet object', pet);
console.log('The typeof pet', typeof pet);
