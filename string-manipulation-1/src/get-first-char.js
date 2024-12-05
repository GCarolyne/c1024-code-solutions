'use strict';
/* exported getFirstChar */
function getFirstChar(string) {
  const str = string;
  for (let i = 0; i < str.length; i++) {
    string = str[0];
  }
  return string;
}
