function whoIsPaying(name){
    //your code here
    let arr = []
    if(name.length > 2){
      arr.push(name, name[0] + name[1])
    }else{
      arr.push(name)
    }
    return arr;
  }

  