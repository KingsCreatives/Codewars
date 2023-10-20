function evenNumbers(array, number) {
    let evens = array.filter(ele => ele % 2 === 0)
    
    return evens.slice(-number)
  }