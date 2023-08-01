function pigIt(str){
    let newStr = str
    
   let result = newStr.split(" ").map(function(ele){
     if(ele.toLowerCase() === ele.toUpperCase()) {
        return ele
     }else{
        ele = ele.slice(1) + ele[0] + 'ay'
     }
     return ele
    } )
   
    return result.join(" ")
}