function dup(arr){
    return arr.map(ele => {
      let res = ''
      for(let i = 0; i < ele.length; i++){
          if(ele[i] !== ele[i + 1]){
              res += ele[i]
          }
      }
      return res
    })
  }