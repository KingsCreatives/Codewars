function topThreeWords(text) {
    // Check if text contains any alphabet character; if not, return an empty array
      if (!/[a-zA-Z]/.test(text)) return [];
    
      // Convert text to lowercase and split it into words
      const words = text.toLowerCase().match(/[a-zA-Z']+/g) || [];
    
      // Count word occurrences
      const wordCount = {};
      for (const word of words) {
        wordCount[word] ? wordCount[word]++ : (wordCount[word] = 1);
      }
    
      // Sort words by count in descending order and take the top 3
      const sortedWords = Object.keys(wordCount)
        .map((word) => ({ word, count: wordCount[word] }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 3);
    
      // Extract the word strings from the sorted objects
      const top3Words = sortedWords.map((wordObject) => wordObject.word);
    
      return top3Words;
    }