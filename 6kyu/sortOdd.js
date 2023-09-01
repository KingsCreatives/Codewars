function sortArrayByOddNumbers(arr) {
    // Extract and sort the odd numbers
    const oddNumbers = arr.filter(num => num % 2 !== 0).sort((a, b) => a - b);
  
    // Use an index to keep track of the sorted odd numbers
    let oddIndex = 0;
  
    // Replace the odd numbers in the original array with the sorted ones
    const result = arr.map(num => {
      if (num % 2 !== 0) {
        const sortedOdd = oddNumbers[oddIndex];
        oddIndex++;
        return sortedOdd;
      } else {
        return num;
      }
    });
  
    return result;
  }