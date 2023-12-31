function remove(s,n){
    let count = 0
    let result = ''
    for(const char of s){
      if(char === "!" && count < n){
        count++
      }else{
        result += char
      }
    }
    
    return result
  }