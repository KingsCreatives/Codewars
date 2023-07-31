function positiveSum(arr) {
  return arr.filter(ele => ele > 0).reduce((acc, num) => acc + num , 0)
}