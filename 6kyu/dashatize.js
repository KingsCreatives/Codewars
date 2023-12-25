function addDashes(num) {
    // Convert the number to a string
    let numStr = num.toString();
    let result = '';
  
    // Iterate through each digit
    for (let i = 0; i < numStr.length; i++) {
      // Check if the digit is odd
      if (parseInt(numStr[i]) % 2 !== 0) {
        // Add a dash before and after the odd digit
        result += '-' + numStr[i] + '-';
      } else {
        // Otherwise, just add the digit
        result += numStr[i];
      }
    }
  
    // Remove consecutive dashes
    result = result.replace(/-{2,}/g, '-');
  
    // Remove leading and trailing dashes
    result = result.replace(/^-+|-+$/g, '');
  
    return result;
  }