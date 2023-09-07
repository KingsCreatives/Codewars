<<<<<<< HEAD
// P : integer Array
// R : true if all odd numbers are greater than all even numbers
// E : Array [11,4,9,2,8] is odd-heavy, Array [11,4,9,2,3,10] is not odd-heavy, 
// P : 

// check if array
=======
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
>>>>>>> 70c23d3ed5ea96ea1bb1c8f76d33af2775fb0035
