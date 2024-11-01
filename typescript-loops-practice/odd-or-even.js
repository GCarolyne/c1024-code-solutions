'use strict';
/* exported oddOrEven */
function oddOrEven(numbers) {
  const newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newArray.push('even');
    } else {
      newArray.push('odd');
    }
  }
  return newArray;
}
// write out and think through the steps to know what steps you need to take.
// create a new array and assign to a variable.
// loop over the input array starting at beginning and running for the full length
// check if the current number is even
// if so push "even" to my new array
// else push "odd" to my new array.
// Once the loop finishes return newArray.
