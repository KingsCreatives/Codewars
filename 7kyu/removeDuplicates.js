function removeDuplicates(arr){
    return arr.filter((el, index) => arr.lastIndexOf(el) == index)
}

