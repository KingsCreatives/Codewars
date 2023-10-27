function palindrome(num, s) {
    // Check if inputs are valid integers
    if (!Number.isInteger(num) || !Number.isInteger(s) || num < 0 || s < 0) {
      return "Not valid";
    }
  
    // Function to check if a number is a palindrome with more than one digit
    function isPalindrome(n) {
      const str = n.toString();
      return str.length > 1 && str === str.split('').reverse().join('');
    }
  
    // Find palindromes
    let result = [];
    while (result.length < s) {
      if (isPalindrome(num)) {
        result.push(num);
      }
      num++;
    }
  
    return result;
  }