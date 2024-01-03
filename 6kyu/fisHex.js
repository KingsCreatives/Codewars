function fisHex(name) {
    // Filter out non-hexadecimal characters (a-f) and convert to lowercase
    const hexCharacters = name.replace(/[^a-f]/gi, '').toLowerCase();
  
    // XOR operation on the hexadecimal values
    const xorResult = hexCharacters
      .split('')
      .map(char => parseInt(char, 16))
      .reduce((accumulator, currentValue) => accumulator ^ currentValue, 0);
  
    return xorResult;
  }