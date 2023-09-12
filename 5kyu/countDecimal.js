function decimalPlaces(num) {
    // Convert the number to a string to work with its representation
    const numStr = num.toString();
  
    // Check if the number is in scientific notation (e.g., 2e-14)
    if (numStr.includes('e')) {
      // Split the number into its coefficient and exponent parts
      const [coefficient, exponent] = numStr.split('e');
      
      // Split the coefficient into integer and fractional parts
      const [integerPart, fractionalPart] = coefficient.split('.');
  
      // Calculate the number of decimal places by adding the absolute value of the exponent
      // to the length of the fractional part (if it exists)
      let numDecimalPlaces = Math.abs(parseInt(exponent, 10));
      if (fractionalPart) {
        numDecimalPlaces += fractionalPart.length;
      }
  
      return numDecimalPlaces;
    } else {
      // If not in scientific notation, split the number into integer and fractional parts
      const [integerPart, fractionalPart] = numStr.split('.');
  
      // If there is no fractional part, return 0 decimal places
      if (!fractionalPart) {
        return 0;
      }
  
      // Otherwise, count all decimal digits in the fractional part
      return fractionalPart.length;
    }
  }