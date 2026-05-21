/**
 * Description:
Your task is to implement a function that takes two inputs, `x` and `y`, and returns the value of `x` raised to the power of `y`.
Simple, right? But you are NOT allowed to use Math.pow();
Both `x` and `y` will be natural numbers (non-negative integers) in range `0 <= x,y <= 13`.
Special Case: For this challenge, `0^0` is defined to be `1`
 */

function power(x, y) {
  let result = 1;
  for (let i = 0; i < y; i++) {
    result *= x;
  }
  return result;
}