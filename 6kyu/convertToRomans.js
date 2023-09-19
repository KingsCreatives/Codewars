function solution(number){
    const romanSymbols = [
         "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"
       ];
       const romanValues = [
         1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
       ];
   
       let result = "";
   
       for (let i = 0; i < romanSymbols.length; i++) {
         while (number >= romanValues[i]) {
           result += romanSymbols[i];
           number -= romanValues[i];
         }
       }
   
       return result;
 }