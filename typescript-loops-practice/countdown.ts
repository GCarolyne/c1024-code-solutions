/* exported countdown */
function countdown(num: number): number[] {
  const count = [];
  for (let i = num; i >= 0; i--) {
    count.push(i);
  }
  return count;
}
