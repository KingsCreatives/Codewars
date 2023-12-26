function cubeOdd(arr) {
    if(arr.some(ele => typeof(ele) !== 'number')) return undefined
    return arr.map(ele => ele ** 3)
              .filter(num => num % 2 !== 0)
              .reduce((prevVal, curVal) => prevVal + curVal, 0)
   }