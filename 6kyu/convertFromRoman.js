function solution (roman) {
    const romanNumerals = {
          "I" : 1,
          "V" : 5,
          "X" : 10,
          "L" : 50,
          "C" : 100,
          "D" : 500,
          "M" : 1000
      }
  
      let result = 0
  
      for(let i =0; i < roman.length; i++){
          let value = romanNumerals[roman[i]]
          
          if(i < roman.length && value < romanNumerals[roman[i + 1]]){
              result -= value
          }else{
              result += value
          }
      }
  
  return result
  }