'use strict';
/* exported getLastChar */
function getLastChar(string) {
  let str = string;
  for (let i = -1; i < string.length; i++) {
    str = string[1];
  }
  return str;
}
