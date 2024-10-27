'use strict';
/* exported filterOutStrings */
function filterOutStrings(values) {
  let newArray = [];
  for (const value of values) {
    if (values === 'string') {
      newArray.push(values);
      return true;
    } else {
      return false;
    }
  }
  return newArray;
}
