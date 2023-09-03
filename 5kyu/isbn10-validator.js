function validISBN10(isbn) {
   let sum 
    let digits

    // Check if the ISBN is 10 digits long.
    if (isbn.length !== 10) {
      return false;
    }

    // check if last num is X, remove it, 
    if(isbn[isbn.length -1] === 'X'){
            digits = isbn.split('').filter((ele,index) => index !== 9).map(Number)
            sum = digits.reduce((acc, num, index) => acc + (num * (index + 1))) 
        return sum % 11 === 0 || sum % 11 === 10
        
    }else{
        digits = isbn.split('').map(Number)
        sum = digits.reduce((acc, num, index) => acc + (num * (index + 1)))
        return sum % 11 === 0 || sum % 11 === 10
    }
}