function digitize(n) {
    let str = n.toString()
   return str.split('').reverse().map(Number)
  }