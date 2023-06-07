function getFirstLetterOfLastWord(phrase: string): string {
  // Split the phrase into individual words
  const words = phrase.trim().split(" ");

  // Get the last word
  const lastWord = words[words.length - 1];

  // Return the first letter of the last word
  return lastWord.charAt(0);
}

export default getFirstLetterOfLastWord;
