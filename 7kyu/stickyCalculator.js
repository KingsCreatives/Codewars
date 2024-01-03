function stickyCalc (operation, val1, val2){
    val1 = Math.round(val1)
    val2 = Math.round(val2)
    let res
    switch(operation){
        case "/" :
        res = `${val1}${val2}` / val2
        break
        case "+" :
        res = +`${val1}${val2}` + val2  
        break
        case "-" :
        res = +`${val1}${val2}` - val2  
        break
        case "*" :
        res = +`${val1}${val2}` * val2  
        break
        default:
          res = 0  
    }

    return Math.round(res)
}

