function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) {
          return [];
      }
    const positive = input.filter(ele => ele > 0).length
    const neg = input.filter(ele => ele < 0).reduce((num,acc) => num + acc, 0)
    return [positive, neg] || []
  }