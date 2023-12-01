function stringy(size){
    let res = ''
    for(let i = 0; i < size; i++){
         i % 2 === 0 ? res += '1' : res += '0'
    }

    return res
}