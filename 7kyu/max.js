function maxDiff(list) {
    if(list.length < 2) return 0
   
   let sortedArr = list.sort((a,b) => a - b)

   return (sortedArr[sortedArr.length - 1] - (sortedArr[0]))
};