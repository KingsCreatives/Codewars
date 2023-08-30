function isOddHeavy(n){
  const arrLen = n.length;
    let oddArr = []
    let eveArr = []
// check if array length is 0 , return false
    if(arrLen === 0){
        return false
    }
// if len == 1, check if num is not even, return true else false
    if(arrLen === 1){
        for(const ele of n){
            if(ele % 2 !== 0){
                return true
            }else{
                return false
            }
        }
    }

// if arr len > 1 , check if every odd no is greater than is greater than even nums
if(arrLen > 1){
    for(const num of n){
        if(num % 2 !== 0){
            oddArr.push(num)
        }else{
            eveArr.push(num)
        }
    }

    oddArr = oddArr.sort((a,b) => a - b)
    eveArr = eveArr.sort((a,b) => a - b)
    const val = oddArr[0]
    return eveArr.every(ele => val > ele )
}

}