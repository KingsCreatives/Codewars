function palindrome(num) {
    // Check if input is a valid integer
    if (!Number.isInteger(num) || num < 0) {
      return "Not valid";
    }
  
    // Function to check if a number is a palindrome with more than one digit
    function isPalindrome(n) {
      const str = n.toString();
      return str.length > 1 && str === str.split('').reverse().join('');
    }
  
    // Extract all substrings and check for palindromes
    const numStr = num.toString();
    const palindromes = [];
    for (let i = 0; i < numStr.length; i++) {
      for (let j = i + 1; j <= numStr.length; j++) {
        const substring = numStr.slice(i, j);
        const substringNum = parseInt(substring, 10);
  
        if (isPalindrome(substringNum) && substringNum % 10 !== 0) {
          palindromes.push(substringNum);
        }
      }
    }
  
    // Remove duplicates and sort the array
    const uniquePalindromes = [...new Set(palindromes)].sort((a, b) => a - b);
  
    return uniquePalindromes.length > 0 ? uniquePalindromes : "No palindromes found";
  }