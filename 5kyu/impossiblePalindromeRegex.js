/**
 * You are known to your friends as 'The Regex Wizard'. You have solved all variety of hard regex katas, and feel pretty confident that you could solve any more that comes your way. Then one day your friend (a computer scientist) approaches you and says
"I know you are good at regex, but I have a challenge that you can't solve."
"Impossible" you say, "Tell me what it is, I'll solve it."
Your friend smiles slyly, "Alright. Write me a regex which will match palindromic words of any length."
"Too easy." you say.

While doing some research for your challenge, you are dismayed to come across this StackOverflow response. You are about to give up, but you remember that you are using JavaScript. Perhaps there is an alternative method, which will convince your friend that you can indeed do the impossible?

Task
Define a constant palindromeMatcher, which will match palindromes of any (nonzero) length when tested with the following String.prototype methods:

.match
.matchAll
.replace
.search
.split

What's a Palindrome?
For this kata we define a palindrome as a single 'word' of length >= 1, which remains the same when reversed (case-insensitive). A 'word' is a sequence of letters (a-z, A-Z) which is not preceeded or succeeded by another letter. Other symbols (eg. !?.) are not a part of a word.

"Hah!" -> "Hah" is a palindrome
"my lil sister" -> "lil" is a palindrome, but "sis" is not (as it is part of "sister")
"Mmmmm, I think not" -> "Mmmmm" and "I" are palindromes.
Notes:
Matches should be global.
Do not try to modify the aforementioned methods (String and RegExp have been frozen)
Matches should not contain any capture groups.
Some words might be rather large.
Examples:
// match
const str1 = "Hi! Wow its already noon";
console.log(str1.match(palindromeMatcher)); // ["Wow", "noon"]

// matchAll
const str2 = "Naan is great. Mmmmmmmm";
console.log(Array.from(str2.matchAll(palindromeMatcher))); // ["Naan", index: 0, input: "Naan is great. Mmmmmmmm", groups: undefined], ["Mmmmmmmm", index: 15, input: "Naan is great. Mmmmmmmm", groups: undefined]]

// replace
const str3 = "i like pop music lol";
console.log(str3.replace(palindromeMatcher, "$&!?")); // "i!? like pop!? music lol!?"

// search
const str4 = "hey dad catch";
console.log(str4.search(palindromeMatcher)); // 4

// split
const str5 = "my sis and i made cake";
console.log(str5.split(palindromeMatcher)); // ["my ", " and ", " made cake"];
Hint: you may want to read up on Symbols.
 */

const palindromeMatcher = {
  flags: 'g',
  [Symbol.match](str) {
    return str.match(this._r(str));
  },
  [Symbol.matchAll](str) {
    return str.matchAll(this._r(str));
  },
  [Symbol.replace](str, ...args) {
    return str.replace(this._r(str), ...args);
  },
  [Symbol.search](str) {
    return str.search(this._r(str));
  },
  [Symbol.split](str, ...args) {
    return str.split(this._r(str), ...args);
  },
  _r(str) {
    str = String(str);
    const m = [];
    const r = /(?<![a-zA-Z])[a-zA-Z]+(?![a-zA-Z])/g;
    let x;
    while ((x = r.exec(str)) !== null) {
      const w = x[0],
        l = w.toLowerCase();
      let p = true;
      for (let i = 0, len = l.length; i < len / 2; i++) {
        if (l[i] !== l[len - 1 - i]) {
          p = false;
          break;
        }
      }
      if (p) m.push(w);
    }
    return m.length
      ? new RegExp(
          `(?<![a-zA-Z])(?:${[...new Set(m)].join('|')})(?![a-zA-Z])`,
          'gi',
        )
      : /(?!)/g;
  },
};