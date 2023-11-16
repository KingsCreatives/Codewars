function processNumbers(arr) {
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      const number = arr[i];
      const squareRoot = Math.sqrt(number);
  
      if (Number.isInteger(squareRoot)) {
        result.push(squareRoot);
      } else {
        result.push(number * number);
      }
    }
  
    return result;
  }
  