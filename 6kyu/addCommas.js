let commas = num => num.toLocaleString()


function commas(number) {
    // Round the number to 3 decimal places and convert it to a string
    const formattedNumber = Number(number.toFixed(3)).toLocaleString('en-US', {
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
    });
  
    return formattedNumber;
  }