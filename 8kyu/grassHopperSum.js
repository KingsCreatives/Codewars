var summation = function (num) {
    let arr = []
    for(let i =1; i <= num; i++){
      arr.push(i)
    }
    return arr.reduce((acc,n) => acc + n, 0)
  }