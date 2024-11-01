'use strict';
/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const addSuffix = [];
  for (let i = 0; i < words.length; i++) {
    addSuffix.push(words[i] + suffix);
  }
  return addSuffix;
}
