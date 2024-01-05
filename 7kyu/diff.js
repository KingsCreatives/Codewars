function diff(a, b){
    let res = []
    for(const ele of a){
        if(!(b.includes(ele))){
            res.push(ele)
        }
    }
    for(const ele of b){
        if(!(a.includes(ele))){
            res.push(ele)
        }
    }

    return res.filter((ele,index, array) => array.indexOf(ele) === index).sort()
  }

  