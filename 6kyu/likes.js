function printMsg(names){

        let msg ;

        const arrLen = names.length

        switch(arrLen){
            case 0:
                msg = "no one likes this"
                break
            case 1 :
                msg = `${names[0]} likes this`
                break
            case 2 :
                msg = `${names[0]} and ${names[1]} like this`
                break
            case 3 :
                msg = `${names[0]}, ${names[1]} and ${names[2]} likes this`
                break
            default :
                msg = `${names[0]}, ${names[1]} and ${arrLen - 2} others likes this`
        }
    

    return msg
}