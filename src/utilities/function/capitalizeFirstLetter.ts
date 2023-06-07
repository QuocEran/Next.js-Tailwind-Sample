function capitalizeFirstLetter(text: string): string {
  let firstLetter = "";
  let restOfText = "";

  if (text?.length === 0) {
    return text; // Return empty string if input is empty
  }
  if (text) {
    firstLetter = text.charAt(0).toUpperCase();
    restOfText = text.slice(1);
  }

  return firstLetter + restOfText;
}

export default capitalizeFirstLetter;
