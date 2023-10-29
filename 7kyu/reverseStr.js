function reverseLetter(str) {
    str = str.replace(/[^a-zA-Z]/g, '')
   return str.split('').reverse('').join('')
 }