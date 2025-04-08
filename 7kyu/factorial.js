/**
 * Your task is to write function factorial.
 */

function factorial(n) {
  if (n === 0) return 1;
  if (n < 2) return n;
  return n * factorial(n - 1);
}
