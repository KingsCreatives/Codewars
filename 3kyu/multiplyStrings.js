function multiply(str, ing) {
    // Check if either input number is zero
    if (str === '0' || ing === '0') {
      return '0';
    }
  
    // Remove leading and trailing zeros, and handle negative signs
    str = str.replace(/^0+/, '') || '0';
    ing = ing.replace(/^0+/, '') || '0';
    
    const isNegative = (str[0] === '-' && ing[0] !== '-') || (str[0] !== '-' && ing[0] === '-');
    str = str.replace(/^-/, '');
    ing = ing.replace(/^-/, '');
    
    // Convert the input strings to arrays of digits
    const num1 = str.split('').map(Number).reverse();
    const num2 = ing.split('').map(Number).reverse();
    
    // Initialize the result array with zeros
    const result = new Array(num1.length + num2.length).fill(0);
    
    // Multiply the numbers digit by digit
    for (let i = 0; i < num1.length; i++) {
      for (let j = 0; j < num2.length; j++) {
        result[i + j] += num1[i] * num2[j];
        if (result[i + j] >= 10) {
          result[i + j + 1] += Math.floor(result[i + j] / 10);
          result[i + j] %= 10;
        }
      }
    }
    
    // Convert the result array back to a string
    let resultStr = result.reverse().join('');
    
    // Remove leading zeros
    resultStr = resultStr.replace(/^0+/, '0');
    
    // Add back the negative sign if necessary
    if (isNegative) {
      resultStr = '-' + resultStr;
    }
    
    return resultStr;
  }
  