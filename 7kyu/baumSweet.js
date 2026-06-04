/**
 * Description:
[Wikipedia](https://en.wikipedia.org/wiki/Baum%E2%80%93Sweet_sequence): The Baum–Sweet sequence is an infinite automatic sequence of `0`s and `1`s defined by the rule:
bn = `1` if the binary representation of `n` contains no block of consecutive `0`s of odd length; bn = `0` otherwise;
for `n ≥ 0`.
Define a generator function `baumSweet` that sequentially generates the values of this sequence.
It will be tested for up to `1 000 000` values.
Note that the binary representation of `0` used here is not `0` but the empty string ( which does not contain any blocks of consecutive `0`s )
 */

function* baumSweet() {
  for (let n = 0; ; n++) {
    if (n === 0) {
      yield 1;
      continue;
    }
    const binary = n.toString(2);
    const blocks = binary.split('1');
    yield blocks.every((b) => b.length % 2 === 0) ? 1 : 0;
  }
}