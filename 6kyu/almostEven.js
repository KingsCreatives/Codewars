var splitInteger = function(num, parts) {
    // Calculate the base size of each part
    const baseSize = Math.floor(num / parts);
  
    // Calculate the number of parts that will have a value of baseSize
    const numBaseSizeParts = parts - (num % parts);
  
    // Generate the array of parts
    const result = Array.from({ length: parts }, (_, index) =>
      index < numBaseSizeParts ? baseSize : baseSize + 1
    );
  
    return result;
  }