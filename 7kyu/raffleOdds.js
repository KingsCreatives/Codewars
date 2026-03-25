/**
 * Raffle Run: What Are the Odds?
You've entered multiple independent raffles back to back. Each raffle is a single-winner draw: one ticket is pulled from the pool, and if it's yours, you win.

Given two arrays of equal length:

totals — the total number of tickets sold in each raffle
purchased — how many tickets you bought in each raffle
Return your probability of winning at least one raffle as a simplified fraction string in the form "numerator/denominator". This fraction must be full reduced, so "4/8" becomes "1/2" and "9/12" becomes "3/4."

Probability Hint
For independent events, the probability of winning at least one is the complement of losing all of them:

P(A or B or ...) = 1 - P(!A) * P(!B) * ...

where P(!X) is the probability of not winning raffle X.

Examples
// One raffle, 1 ticket out of 3
raffleOdds([3], [1])           // => "1/3"

// Two raffles, 1 ticket each out of 4
raffleOdds([4, 4], [1, 1])    // => "7/16"

// Three raffles
raffleOdds([2, 3, 6], [1, 1, 1])  // => "13/18"
Notes
All values are positive integers
purchased[i] <= totals[i]
If you've purchased no tickets in any given raffle, that raffle has no impact on your odds
If you are guaranteed to win any single raffle, return "1/1"
The returned fraction must be fully reduced
 * @param {*} totals 
 * @param {*} purchased 
 * @returns 
 */
function raffleOdds(totals, purchased) {
  const gcd = (a, b) => (b === 0n ? a : gcd(b, a % b));

  let num = 1n;
  let den = 1n;

  for (let i = 0; i < totals.length; i++) {
    const t = BigInt(totals[i]);
    const p = BigInt(purchased[i]);

    if (p === t) return '1/1';
    if (p === 0n) continue;

    num *= t - p;
    den *= t;

    const g = gcd(num, den);
    num /= g;
    den /= g;
  }

  let winNum = den - num;
  let winDen = den;

  const g = gcd(winNum, winDen);
  winNum /= g;
  winDen /= g;

  return `${winNum}/${winDen}`;
}
