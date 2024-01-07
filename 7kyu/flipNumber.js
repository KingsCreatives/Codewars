function flipNumber(n){
    let str = n.split("").reverse().join("");
    let answer = "";
    for (let i = 0; i < n.length; i++) {
        answer += str[0];
        str = str.slice(1).split("").reverse().join("");
    }
    return answer;
  }

// console.log(flipNumber("012"))

