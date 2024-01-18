function sum (numbers) {
 return numbers.length ? numbers.reduce((prev, curVal) => prev + curVal, 0) : 0   
};