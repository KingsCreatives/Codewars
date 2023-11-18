function isVow(array) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    for (let i = 0; i < array.length; i++) {
      if (vowels.includes(String.fromCharCode(array[i]))) {
        array[i] = String.fromCharCode(array[i]);
      }
    }
  
    return array;
  }
  
  