'use strict';
/* exported findIndex */
function findIndex(array, value) {
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
