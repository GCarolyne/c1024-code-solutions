/* exported addSuffixToAll */

function addSuffixToAll(words: string[], suffix: any): string[] {
  const addSuffix: string[] = [];
  for (let i = 0; i < words.length; i++) {
    addSuffix.push(words[i] + suffix);
  }
  return addSuffix;
}
