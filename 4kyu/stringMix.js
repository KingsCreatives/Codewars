function mix(s1, s2) {
    const count1 = countLetters(s1);
    const count2 = countLetters(s2);
  
    const result = [];
  
    for (let charCode = 97; charCode <= 122; charCode++) {
      const char = String.fromCharCode(charCode);
      const freq1 = count1[char] || 0;
      const freq2 = count2[char] || 0;
  
      if (freq1 > 1 || freq2 > 1) {
        if (freq1 > freq2) {
          result.push(`1:${char.repeat(freq1)}`);
        } else if (freq2 > freq1) {
          result.push(`2:${char.repeat(freq2)}`);
        } else {
          result.push(`=:${char.repeat(freq1)}`);
        }
      }
    }
  
    result.sort((a, b) => {
      if (b.length !== a.length) {
        return b.length - a.length;
      } else if (a[0] !== b[0]) {
        return a[0].charCodeAt() - b[0].charCodeAt();
      } else {
        return a.localeCompare(b);
      }
    });
  
    return result.join('/');
  }
  
  function countLetters(s) {
    const count = {};
    for (const char of s) {
      if (/[a-z]/.test(char)) {
        count[char] = (count[char] || 0) + 1;
      }
    }
    return count;
  }