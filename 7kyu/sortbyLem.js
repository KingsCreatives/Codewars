function sortByLength (array) {
    const compareLength = (a, b) =>  a.length - b.length
    
    return array.sort(compareLength)
  };