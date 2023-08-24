function palindrome(num) {
    // if num < 2 return false
    const numStr = num.toString()
    const reversedNumStr = numStr.split('').reverse().join("")
    
    if(numStr.length === 1){
        return false
    }
    //Check if num is str || < 0  - return not valid
    if(typeof(num) !== 'number' || num < 0){
        return "Not valid"
    }
    
    // conditional - if num === num.reverse return True else false
    return numStr == reversedNumStr
}