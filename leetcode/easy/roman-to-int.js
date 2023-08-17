var romanToInt = function(s) {
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };

    let total = 0;

    for(let i = 0; i < s.length; i++){
       let  number = s[i]

       const value = romanNumerals[number]

       if(i < s.length && value < romanNumerals[s[i + 1]]){
           total -= value
       }else{
           total += value
       }
    }

    return total
};