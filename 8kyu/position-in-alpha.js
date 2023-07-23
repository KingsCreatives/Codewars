function position(letter){
  letter = letter.toLowerCase()
  const asCosde = letter.charCodeAt(0);
  return `Position of alphabet: ${asCosde - 96}`;
}