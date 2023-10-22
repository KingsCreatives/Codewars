function getAverage(marks){
    return Math.floor(marks.reduce((acc,sum)=> acc + sum,0)/marks.length)
  }