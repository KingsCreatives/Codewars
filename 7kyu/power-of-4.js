function powerOfFour(num){
    if(typeof(num) !== 'number' || num < 0){
        return false;
    }
    while( n % 4 === 0){
        n = n / 4;
    }
    return n === 1;
}