function multipleOfIndex(array) {
    let ans = []
    for(let i = 0; i < array.length; i++){
      if(array[i] === 0){
         ans.push(+0)
      }else if(array[i] % i === 0){
        ans.push(array[i])
      }
    }
    
    return ans
  }