function distinct(a) {
    let newArr = a.filter((number,index,array) => array.indexOf(number) === index)
     return newArr
  }