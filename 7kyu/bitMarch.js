/**
 * Description:
Odd bits are getting ready for Bits Battles.

Therefore the n bits march from right to left along an 8 bits path. Once the most-significant bit reaches the left their march is done. Each step will be saved as an array of 8 integers.

Return an array of all the steps.

1 <= n <= 8

NOTE: n != 0, because n represents the number of 1s.

Examples
This resembles a simple 8 LED chaser:

n = 3

00000111
00001110
00011100
00111000
01110000
11100000
n = 7

01111111
11111110
 */

function bitMarch(n) {
  const result = [];
  let value = (1 << n) - 1;

  while (value < 1 << 8) {
    const bits = value.toString(2).padStart(8, '0').split('').map(Number);

    result.push(bits);
    value <<= 1;
  }

  return result;
}