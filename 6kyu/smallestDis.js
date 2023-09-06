function smallestFactorDistance(number) {
    // Initialize an array to store the factors of the number
    const factors = [];
  
    // Find the factors of the number
    for (let i = 1; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        factors.push(i);
  
        // If i is not the square root of the number, also add its corresponding factor
        if (i !== number / i) {
          factors.push(number / i);
        }
      }
    }
  
    // Sort the factors in ascending order
    factors.sort((a, b) => a - b);
  
    // Initialize a variable to store the smallest distance
    let smallestDistance = Infinity;
  
    // Find the smallest distance between factors
    for (let i = 1; i < factors.length; i++) {
      const distance = factors[i] - factors[i - 1];
      if (distance < smallestDistance) {
        smallestDistance = distance;
      }
    }
  
    return smallestDistance;
  }