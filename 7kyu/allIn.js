function containAllRots(strng, arr) {
    // If the input string is empty, return true
    if (strng === "") {
      return true;
    }
  
    // Function to check if a rotated string is in the array
    function isRotatedInArray(rotatedStr) {
      return arr.includes(rotatedStr);
    }
  
    // Loop through all rotations of the input string
    for (let i = 0; i < strng.length; i++) {
      const rotatedStr = strng.slice(i) + strng.slice(0, i);
  
      // If any rotation is not in the array, return false
      if (!isRotatedInArray(rotatedStr)) {
        return false;
      }
    }
  
    // If all rotations are in the array, return true
    return true;
  }
  
  