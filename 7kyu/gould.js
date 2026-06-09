/**
 * Description:
Gould's sequence[wiki](https://en.wikipedia.org/wiki/Gould%27s_sequence) is an infinite integer sequence, named after Henry W. Gould[wiki](https://en.wikipedia.org/wiki/Henry_W._Gould), that counts how many odd numbers are in each row of Pascal's triangle[wiki](https://en.wikipedia.org/wiki/Pascal%27s_triangle). It consists only of powers of two*, and begins

```
1, 2, 2, 4, 2, 4, 4, 8, 2, 4, 4, 8, 4, 8, 8, 16, ..

```

Note that Gould's sequence is a fractal sequence[wiki](https://en.wikipedia.org/wiki/Fractal_sequence).
The binary logarithms ( exponents in the powers of two ) of Gould's sequence form an integer sequence

```
0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4, ..

```

* A companion kata in Lean, proving that all elements of Gould's sequence are powers of two, is [here](https://www.codewars.com/kata/all-elements-of-goulds-sequence-are-powers-of-two/).
Task
Define a generator function `gould` that sequentially generates the values ( the logarithms ) of this infinite sequence.
It will be tested for up to `1 000 000` values. ( Try to resist the temptation to approximate `Infinity` with `a million` ! ) 
 */

function* gould() {
  for (let n = 0; ; n++) {
    yield n
      .toString(2)
      .split('')
      .filter((b) => b === '1').length;
  }
}