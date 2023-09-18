class RomanNumerals {
    // Define static method to convert Roman numerals to integers
    static toRoman(num) {
      // Define arrays for Roman numeral symbols and their corresponding values
      const romanSymbols = [
        "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"
      ];
      const romanValues = [
        1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
      ];
  
      let result = "";
  
      for (let i = 0; i < romanSymbols.length; i++) {
        while (num >= romanValues[i]) {
          result += romanSymbols[i];
          num -= romanValues[i];
        }
      }
  
      return result;
    }
  
    // Define static method to convert integers to Roman numerals
    static fromRoman(roman) {
      // Create a mapping of Roman numeral symbols to their values
      const romanMap = new Map([
        ["M", 1000],
        ["D", 500],
        ["C", 100],
        ["L", 50],
        ["X", 10],
        ["V", 5],
        ["I", 1],
      ]);
  
      let result = 0;
      let prevValue = 0;
  
      for (let i = roman.length - 1; i >= 0; i--) {
        const currentSymbol = roman[i];
        const currentValue = romanMap.get(currentSymbol);
  
        if (!currentValue) {
          // Invalid Roman numeral
          return null;
        }
  
        if (currentValue < prevValue) {
          result -= currentValue;
        } else {
          result += currentValue;
        }
  
        prevValue = currentValue;
      }
  
      return result;
    }
  }