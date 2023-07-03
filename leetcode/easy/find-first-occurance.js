function subStr(haystack, needle){
    if(haystack === needle || needle === ""){
        return -1
    }

    for(let i = 0; i < haystack.length; i++){
        if(haystack[i] == needle[0]){
            let sub = haystack.substring(i, i + needle.length)

            if(sub === needle){
                return i
            }
        }
    }

    return -1;
}