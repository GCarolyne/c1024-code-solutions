/* exported tail */
function tail(array: unknown[]): any[] {
  const newArray: any[] = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
