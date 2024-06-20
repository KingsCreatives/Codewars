/**
 * Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee"
 */

function onlyDuplicates(str) {
  const count = {}
  
    let result = [...str]
  for(let char of str){
    count[char] = (count[char] || 0) + 1
  }

  for(let char of str){
    if(count[char] < 2){
      result.splice(result.indexOf(char), 1)
    }
  }
  return result.join('')
}

console.log(onlyDuplicates("abccdefee"));