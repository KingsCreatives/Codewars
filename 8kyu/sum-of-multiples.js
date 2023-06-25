function sumMul(n,m){
    //your idea here
      let multiple = []
      if(n <= 0 || typeof(n) != 'number' || m <= 0) {
        return 'INVALID'
      }
      
      for(let i = n; i < m; i+= n){
         multiple.push(i)
      }
      return multiple.reduce((acc,sum) => acc + sum, 0)
    }