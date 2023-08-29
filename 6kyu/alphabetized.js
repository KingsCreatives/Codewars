function alphabetized(s){
    // Remove whitespace and punctuation using regex
      s = s.replace(/[^a-zA-Z]/g, '');
   
    // Convert to lowercase and create an array of objects containing character and original index
    const charsWithIndex = s.split('').map((c, index) => ({ char: c, index }));
   
   // Sort the characters based on their lowercase value and original index
   charsWithIndex.sort((a, b) => {
     const charComparison = a.char.toLowerCase().localeCompare(b.char.toLowerCase());
     return charComparison !== 0 ? charComparison : a.index - b.index;
   });
   
   // return concatenated version of the sorted characters
   return charsWithIndex.map(obj => obj.char).join('');
   }