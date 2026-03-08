
/**Oh no, Timmy's filter doesn't seem to be working? Your task is to fix the Filter Number function to remove all the numbers from the string. */

let filterNumbers = function (str) {
  return str
    .split('')
    .filter((c) => isNaN(c) || c === '')
    .join('');
};


console.log(filterNumbers('racy185b62ql0'));