/* exported getLastChar */
function getLastChar(string: string): any {
  let str = string;
  for (let i = -1; i < string.length; i++) {
    str = string[1];
  }
  return str;
}
