'use strict';
function getRangeReport(start, end) {
  let argumentsArray = Array.prototype.slice.call(start, end);
  for (const totalSum of argumentsArray) {
    argumentsArray += totalSum;
  }
  const newArray = [];
  for (let i = 0; i < argumentsArray.length; i++) {
    if (argumentsArray[i] % 2 === 0) {
      newArray.push('even');
    } else {
      newArray.push('odd');
    }
  }
  const range = [];
  for (let i = 0; i < argumentsArray.length; i++) {
    range.push(argumentsArray.length);
  }
  const average = [];
  for (let i = 0; i < argumentsArray.length; i++) {
    average.push(argumentsArray[i] + argumentsArray);
  }
}
getRangeReport(10, 50);
