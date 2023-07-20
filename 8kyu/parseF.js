/*
Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.
 */

// solution
function parseF(input) {
  if (typeof input === "number") {
    return input; 
  } else if (typeof input === "string") {
    const parsedNumber = parseFloat(input);
    return isNaN(parsedNumber) ? null : parsedNumber; 
  } else {
    return null; 
  }
}

