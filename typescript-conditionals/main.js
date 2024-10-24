'use strict';
/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}
function isOldEnoughToDrink(person) {
  if (person.age > 21) {
    return true;
  } else {
    return false;
  }
}
function isOldEnoughToDrive(person) {
  if (person.age > 16) {
    return true;
  } else {
    return false;
  }
}
function isOldEnoughToDrinkAndDrive(person) {
  if (person) {
    return false;
  } else {
    return false;
  }
}
function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH <= 6) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}
function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
      return 'we are the warner brothers!';
    case 'wakko':
      return 'We are the warner brothers';
    case 'dot':
      return 'Im cute';
    default:
      return 'Goodnight everybody!';
  }
}
function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'Die Hard';
    case 'comedy':
      return 'Step Brothers';
    case 'horror':
      return 'The Shining';
    case 'drama':
      return 'Forrest Gump';
    case 'musical':
      return 'The Sound Of Music';
    case 'sci -fi':
      return 'The Matrix';
    default:
      return 'Genre not recognized. Choose between action,comedy,horror,drama,musical, or sci-fi';
  }
}
