function minCostToAddNumbers(numbers) {
    // Sort the array in ascending order
    numbers.sort((a, b) => a - b);
  
    let totalCost = 0;
  
    while (numbers.length > 1) {
      // Take the two smallest numbers
      const first = numbers.shift();
      const second = numbers.shift();
  
      // Calculate the cost of adding them
      const cost = first + second;
  
      // Add the cost to the total
      totalCost += cost;
  
      // Insert the result back into the array
      numbers.push(cost);
  
      // Re-sort the array
      numbers.sort((a, b) => a - b);
    }
  
    return totalCost;
  }
  
  