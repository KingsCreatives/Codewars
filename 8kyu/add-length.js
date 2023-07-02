function addLength(str){
    str = str.split(' ')
    for(let i = 0; i < str.length; i++){
        str[i] = str[i] + ` ${str[i].length}`
    }

    console.log(str)
}

addLength("apple ban")