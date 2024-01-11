/**
 * 
 */
// solution
function pak(s) {
  return s
    .split(" ")
    .filter((e) => e.length)
    .join(" pak ");
}

console.log(pak("Man I need a taxi up to Ubud"));