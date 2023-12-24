function commonGround(s1, s2) {
    const words1 = s1.split(' ');
    const words2 = s2.split(' ');
  
    const commonWords = words2.filter(word => words1.includes(word));
  
    return commonWords.length > 0 ? commonWords.join(' ') : "death";
  }