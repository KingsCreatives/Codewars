function findDifference(a, b) {
  let volumeA = a.reduce((acc, num) => acc * num,1)
    let volumeB = b.reduce((acc, num) => acc * num,1)
    
    return Math.abs(volumeA - volumeB)

}