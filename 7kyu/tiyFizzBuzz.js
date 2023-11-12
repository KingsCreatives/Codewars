function tiyFizzBuzz(inputString) {
    const isUpperCaseConsonant = (char) => /[BCDFGHJKLMNPQRSTVWXYZ]/.test(char);
    const isUpperCaseVowel = (char) => /[AEIOU]/.test(char);
    const isLowerCaseConsonant = (char) => /[bcdfghjklmnpqrstvwxyz]/.test(char);
    const isLowerCaseVowel = (char) => /[aeiou]/.test(char);
  
    return inputString
      .split('')
      .map((char) => {
        if (isUpperCaseConsonant(char)) {
          return 'Iron';
        } else if (isUpperCaseVowel(char)) {
          return 'Iron Yard';
        } else if (isLowerCaseConsonant(char) || !/[a-zA-Z]/.test(char)) {
          return char;
        } else if (isLowerCaseVowel(char)) {
          return 'Yard';
        }
      })
      .join('');
  }
  