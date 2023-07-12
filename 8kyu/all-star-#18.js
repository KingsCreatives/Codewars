function strCount(str, letter){
    return str.split(letter).length -1;
}

function strCount2(str,letter){
    return str.split('').filter(count => count == letter).length;
}