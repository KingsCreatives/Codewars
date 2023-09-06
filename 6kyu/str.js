function modifyString(string) {
    // Split the input string into words
    const words = string.split(' ');
  
    // Function to modify a single word
    function modifyWord(word) {
      let modifiedWord = '';
      for (let i = 0; i < word.length; i++) {
        if (i % 2 === 0) {
          // Even-indexed character, convert to uppercase
          modifiedWord += word[i].toUpperCase();
        } else {
          // Odd-indexed character, convert to lowercase
          modifiedWord += word[i].toLowerCase();
        }
      }
      return modifiedWord;
    }
  
    // Apply the modification to each word and join them back into a string
    const modifiedWords = words.map(modifyWord);
    
    // Join the modified words with spaces to form the final string
    return modifiedWords.join(' ');
  }