function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((acc, num) => acc + num, 0) + arr2.reduce((acc, num) => acc + num, 0)
  }