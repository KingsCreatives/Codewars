function nameInStr(str, name) {
    let index1 = 0; // Index to track the current character in str
  let index2 = 0; // Index to track the current character in name

  // Convert both strings to lowercase for case-insensitive comparison
  const lowerStr1 = str.toLowerCase();
  const lowerStr2 = name.toLowerCase();

  while (index1 < lowerStr1.length && index2 < lowerStr2.length) {
    const char1 = lowerStr1.charAt(index1);
    const char2 = lowerStr2.charAt(index2);

    if (char1 === char2) {
      // Found a matching character, move to the next character in str2
      index2++;
    }

    // Move to the next character in str1
    index1++;
  }

  // If we reached the end of str2, it means str2's characters were found in order in str1
  return index2 === lowerStr2.length;
  }