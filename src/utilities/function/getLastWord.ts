function getLastWord(words: string): string {
  const wordArray = words.split(" ");
  return wordArray[wordArray.length - 1];
}

export default getLastWord;
