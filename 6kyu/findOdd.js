function findOdd(A) {
    const counts = {};
  
      for(num of A){
          if(counts[num]){
              counts[num]++
          }else{
              counts[num] = 1
          }
      }
      
      for(const nums in counts){
          if(counts[nums] % 2 !== 0){
              return parseInt(nums)
          }
      }
  }