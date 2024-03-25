/*
Write a function, isItLetter or is_it_letter, which tells us if a given character is an, uppercase or lowercase, letter.

 */

// solution
function isItLetter(character) {
  const isLetter = /^[a-zA-Z]/
  return isLetter.test(character)
}

console.log(isItLetter("1"))