function alphabetPosition(text){
    // convert to LowerCase
    text= text.toLowerCase()
// remove all non-english alphabet
    text = text.replace(/[^a-zA-Z]/g, "")
// get position of each letter
    const alphaPosi = alpha => {
        return alpha.charCodeAt(0) - 'a'.charCodeAt(0) + 1
    }
// split str, convert each letter to its position
   return text.split('').map(ele => alphaPosi(ele)).join(' ')
}
