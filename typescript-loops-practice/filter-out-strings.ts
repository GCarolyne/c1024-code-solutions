/* exported filterOutStrings */
function filterOutStrings(values: []): any[] {
  const filtered: any = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== 'string') {
      filtered.push(values[i]);
    }
  }
  return filtered;
}
