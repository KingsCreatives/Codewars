function rotate(str){
    let newStr = str;

    let arr = []

    for(let i = 0 ; i < str.length; i++){
        newStr = newStr.slice(1) + newStr[0]
        arr.push(newStr)
    }

    return arr;
}