function solve(s){
    let up = 0
    let low = 0
    let nums = 0
    let specials = 0
    
    for(let i = 0; i < s.length; i++){
      let char = s[i]
      
       if (char >= 'A' && char <= 'Z') {
         up++;
       } else if (char >= 'a' && char <= 'z') {
         low++;
       } else if (char >= '0' && char <= '9') {
         nums++
       } else {
         specials++
       }
     }
   
     return [up, low, nums, specials]
    }