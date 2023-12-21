function explode(x){
    let sum
    let res = []
    if(x.every(ele => typeof(ele) !== 'number')){
       return 'Void!'
    }
    else if(x.every(ele => typeof(ele) === 'number')){
        sum = x[0] + x[1]
    }else if(typeof(x[0]) === 'number'){
        sum = x[0]
    }else{
        sum = x[1]
    }

    for(let i =0; i < sum; i++){
        res.push(x)
    }

    return res
   }
