function averageString(str) {
    const values = {
        "zero" : 0,
        "one" : 1,
        "two" : 2,
        "three" : 3,
        "four" : 4,
        "five" : 5,
        "six" : 6,
        "seven" : 7,
        "eight" : 8,
        "nine" : 9
    }

    const reverseValues = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine"
    };

    str = str.split(' ')
    let arr = []
    for(let i = 0; i < str.length; i++){
        let ele = str[i]
        if((!(ele in values) || str.length < 1)){
            return "n/a"
        }else{
            arr.push(values[ele])
        }   
    }
    let average = Math.floor(arr.reduce((sum, num) => sum + num, 0) / arr.length)
    
    return reverseValues[average]
  } 