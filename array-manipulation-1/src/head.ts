/* exported head */
function head(array: any): any[] {
  const newArray: any = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[0]);
  }
  return array;
}
