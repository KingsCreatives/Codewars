function getNumberFromString(inputString){
    const digitsOnly = inputString.replace(/\D/g, ''); 
    return digitsOnly.length > 0 ? parseInt(digitsOnly, 10) : NaN;
  }