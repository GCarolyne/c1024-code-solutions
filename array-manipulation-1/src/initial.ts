/* exported initial */
function initial(array: unknown[]): any[] {
  console.log(array);
  const newArray: any[] = [];
  for (let i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
