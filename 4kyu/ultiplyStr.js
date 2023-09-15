function multiplyStrings(a, b) {
    // Create an array to store the result, initialized with zeros.
    const resultArray = Array(a.length + b.length).fill(0);
  
    // Perform long multiplication digit by digit.
    for (let i = a.length - 1; i >= 0; i--) {
      for (let j = b.length - 1; j >= 0; j--) {
        // Calculate the product of the current digits.
        const product = parseInt(a[i]) * parseInt(b[j]);
  
        // Add the product to the existing value at the corresponding position.
        const sum = product + resultArray[i + j + 1];
        resultArray[i + j] += Math.floor(sum / 10);
        resultArray[i + j + 1] = sum % 10;
      }
    }
  
    // Remove leading zeros from the result.
    while (resultArray.length > 1 && resultArray[0] === 0) {
      resultArray.shift();
    }
  
    // Convert the result array to a string and return it.
    return resultArray.join('');
  }
  

  