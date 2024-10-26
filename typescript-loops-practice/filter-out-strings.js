'use strict';
/* exported filterOutStrings */
function filterOutStrings(values) {
  const filtered = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== 'string') {
      filtered.push(values[i]);
    }
  }
  return filtered;
}
