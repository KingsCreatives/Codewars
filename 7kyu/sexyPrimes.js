function sexy_prime(x, y) {
    function isPrime(num) {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
  
    if (x < 2 || y < 2) return false;
  
    let difference = Math.abs(y - x);
  
    return difference === 6 && isPrime(x) && isPrime(y);
  }
  