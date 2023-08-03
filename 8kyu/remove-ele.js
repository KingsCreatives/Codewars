function removeEveryOther(arr){
  return arr.filter((ele,index) => {
    if(index % 2 === 0){
      return ele
    }
  })
}