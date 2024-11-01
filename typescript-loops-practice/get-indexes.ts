/* exported getIndexes */
function getIndexes(array: any): number[] {
  const index: number[] = [];
  for (let i = 0; i < array.length; i++) {
    index.push(i);
  }
  return index;
}
