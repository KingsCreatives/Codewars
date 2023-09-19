function encode(str) {
    // Define a mapping of vowels to numbers
    const vowelMap = {
      'a': '1',
      'e': '2',
      'i': '3',
      'o': '4',
      'u': '5',
    };
  
    // Use a regular expression to replace lowercase vowels with numbers
    return str.replace(/[aeiou]/g, (match) => vowelMap[match]);
  }
  
  function decode(str) {
    // Define a reverse mapping of numbers to vowels
    const reverseVowelMap = {
      '1': 'a',
      '2': 'e',
      '3': 'i',
      '4': 'o',
      '5': 'u',
    };
  
    // Use a regular expression to replace numbers with vowels
    return str.replace(/[12345]/g, (match) => reverseVowelMap[match]);
  }