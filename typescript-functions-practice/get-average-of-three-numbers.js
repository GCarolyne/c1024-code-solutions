"use strict";
/* exported getAverageOfThreeNumbers */
function getAverageOfThreeNumbers(x, y, z) {
    const averageResult = x + y + z;
    return averageResult / 3;
}
console.log('getAverageOfThreeNumbers', getAverageOfThreeNumbers(2, 4, 6));
console.log('getAverageOfThreeNumbers', getAverageOfThreeNumbers(97, 85, 94));
console.log('getAverageOfThreeNumbers', getAverageOfThreeNumbers(10, 9, 9));
