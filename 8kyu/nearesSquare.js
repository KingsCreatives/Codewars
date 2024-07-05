/**
 * Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.
 */

//solution
function nearestSq(n) {
  // Calculate the square root of n
  const sqrt = Math.sqrt(n);

  // Find the floor and ceiling values of the square root
  const lowerSquare = Math.floor(sqrt);
  const upperSquare = Math.ceil(sqrt);

  // Calculate the two nearest perfect squares
  const lowerValue = lowerSquare * lowerSquare;
  const upperValue = upperSquare * upperSquare;

  // Determine which of the two perfect squares is closer to n
  if (Math.abs(lowerValue - n) <= Math.abs(upperValue - n)) {
    return lowerValue;
  } else {
    return upperValue;
  }
}