var isPalindrome = function(s) {
    s = s.toLowerCase()
    const regex = /[^a-zA-Z0-9]/g;
    const cleanStr = s.replace(regex, "")

   return cleanStr.split("").join("") === cleanStr.split("").reverse().join("")
};