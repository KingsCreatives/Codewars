var findAverage = function (nums) {
    return nums.reduce((acc,n) => acc + n) / nums.length;
  }