function sumOfDivided(lst) {
    const sumsByPrimeFactors = {};
   
       function calculatePrimeFactorsAndSums(n) {
           const factors = [];
           
           // Divide the number by 2 until it's odd
           while (n % 2 === 0) {
               factors.push(2);
               n /= 2;
           }
           
           // Now n is odd, so we can start checking odd divisors
           for (let i = 3; i <= Math.sqrt(n); i += 2) {
               while (n % i === 0) {
                   factors.push(i);
                   n /= i;
               }
           }
           
           // If n is still greater than 1, it's a prime factor itself
           if (n > 1) {
               factors.push(n);
           }
   
           return factors;
       }
   
       for (let num of lst) {
           const factors = calculatePrimeFactorsAndSums(Math.abs(num));
           const primeFactorSet = new Set(factors);
   
           for (let factor of primeFactorSet) {
               sumsByPrimeFactors[factor] = (sumsByPrimeFactors[factor] || 0) + num;
           }
       }
   
       const result = [];
   
       for (let factor in sumsByPrimeFactors) {
           result.push([parseInt(factor), sumsByPrimeFactors[factor]]);
       }
   
       result.sort((a, b) => a[0] - b[0]);
   
       return result;
   }
    