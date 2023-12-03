function capitalize(s){
    let odd = ''
    let even = ''
    
    for(let i = 0; i < s.length; i++){
      if(i % 2 === 0){
        even += s[i].toUpperCase()
        odd += s[i]
      }else{
        odd += s[i].toUpperCase()
        even += s[i]
      }
    }
    
    return [even, odd]
  };