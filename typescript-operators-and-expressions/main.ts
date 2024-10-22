const width: number = 10;
const height: number = 20;
const area: number = width * height;
console.log('the value of the area is:', area);
console.log('the typeof area is:', typeof area);

const bill: number = 44;
const payment: number = 100;
const change: number = payment - bill;
console.log('the value of change:', change);
console.log('the typeof change:', typeof change);

const quizzes: number = 55;
const midterm: number = 77;
const final: number = 99;
const grade: number = (quizzes + midterm + final) / 3;
console.log('the value of grade:', grade);
console.log('the typeof grade:', typeof grade);

const firstName: string = 'Carolyne';
const lastName: string = 'Golias';
const fullName: string = firstName + ' ' + lastName;
console.log('the value of fullName', fullName);
console.log('typeof fullName', typeof fullName);

const pH: number = 4;
const isAcidic: boolean = pH < 7;
console.log('the value of isAcidic', isAcidic);
console.log('the typeof isAcidic', typeof isAcidic);

const headCount: number = 5;
const isSparta: boolean = headCount === 300;
console.log('the value of isSparta', isSparta);
console.log('the typeof isSparta', typeof isSparta);

let motto: string = fullName;
motto += ' is the GOAT.';
console.log('the value of motto', motto);
console.log('the typeof motto', typeof motto);
