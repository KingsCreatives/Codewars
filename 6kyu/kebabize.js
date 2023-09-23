function kebabize(str) {
    const letters = str
                    .split('')
                    .filter(char => /[a-zA-Z]/.test(char))
                    .map((ele, i) => i !== 0 && ele === ele.toUpperCase() ? ele = '-' + ele : ele)
                    .join('')
  
      return letters.toLowerCase()
  }