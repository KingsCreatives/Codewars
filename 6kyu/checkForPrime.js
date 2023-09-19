function isPrime(num) {
    //TODO
    if(num <= 1) return false
    else if(num <= 3) return true
    else if(num % 2 === 0 || num % 3 === 0) return false
    
    // Check for prime using a loop
      for (let i = 5; i * i <= num; i += 6) {
          if (num % i === 0 || num % (i + 2) === 0) {
              return false; // Divisible by i or i + 2
          }
      }
  
      return true; 
  }