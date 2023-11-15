function squareRoot(num) {
    if (num < 0) {
      return NaN; // Square root of a negative number is undefined
    }
  
    // Initial guess
    let guess = num / 2;
  
    // Babylonian method for approximating square root
    for (let i = 0; i < 10; i++) {
      guess = 0.5 * (guess + num / guess);
    }
  
    // Round to 5 decimal places
    const roundedResult = +guess.toFixed(5);
  
    return roundedResult;
  }
  
