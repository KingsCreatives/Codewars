function count(string) {
    let count = {}
    
    for(const alpha of string){
        count[alpha] ? count[alpha]++ : count[alpha] = 1
    }
    
    return count
  }

  