function duplicateCount(text){
    // convert text to lowercse
    text = text.toLowerCase();
    // create variable to count duplicate character
    let duplicateCounter = []
    // create  a set to store encountered characters
    const characterSet = new Set()
    // loop through the text to see if character is already in the set
     for(const character of text){
         // if character is in set , push to duplicate array
        if(characterSet.has(character)){
            duplicateCounter.push(character)
        }
        characterSet.add(character)
     }
    //  filter duplicate array , return the length
     return duplicateCounter.filter((ele,index, array) => array.indexOf(ele)  === index).length;
  }