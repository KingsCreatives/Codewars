/**
 * Make me slow! Calling makeMeSlow() should take at least 7 seconds.
 */
const makeMeSlow = () =>
  ((start) => {
    while (Date.now() - start < 7000);
  })(Date.now());
