function reverseSlice(str) {
   let reversedStr = str.split('').reverse().join()
   let result = []
   for(let i = 0; i < str.length ; i++){
      result.push(reversedStr.slice(i))
   }
   return result
  }


