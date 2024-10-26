/* exported filterOutNulls */
function filterOutNulls(values: []): any[] {
  const filtered: any = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] != null) {
      filtered.push(values[i]);
    }
  }
  return filtered;
}

// here I filtered out a index from a array
