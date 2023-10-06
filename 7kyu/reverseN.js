function reverseNumber(n) {
    return parseInt(Math.abs(n).toString().split('').reverse().join('')) * Math.sign(n);
  }