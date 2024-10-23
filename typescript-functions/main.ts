function convertMinutesToSeconds(minutes: number): number {
  const MinutesToSeconds: number = minutes * 60;
  return MinutesToSeconds;
}
convertMinutesToSeconds(5);
console.log('The amount of seconds in minutes is:', convertMinutesToSeconds(5));

function greet(name: string): string {
  const greeting: string = 'Hello' + ' ' + 'have a beautiful day ' + name;
  return greeting;
}

console.log('The value of the name in greeting:', greet('Carolyne'));

const getArea = (width: number, height: number): number => width * height;

console.log('The result of the area measurements', getArea(20, 50));

interface Person {
  firstName: string;
  lastName: string;
}
const person: Person = {
  firstName: 'Carolyne',
  lastName: 'Golias',
};
const getFirstName = (person: Person): string => person.firstName;

console.log('The first name of the person is:', getFirstName(person));

const array: string[] = ['tomatoes', 'pineapple', 'grape'];

const getLastElement = (array: string[]): string => array[array.length - 1];

console.log('The last index of the array is:', getLastElement(array));

function callOtherFunction(otherFunction: Function, params: unknown): any {
  return otherFunction(params);
}
console.log(
  'The other function called is:',
  callOtherFunction(convertMinutesToSeconds, 10)
);
