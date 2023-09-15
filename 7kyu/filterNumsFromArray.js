var filterString = function(value) {
    value = value.replace(/[^0-9]/g, '')
    const nums = value.split('').map(Number)
    return Number(nums.join(''))
  }