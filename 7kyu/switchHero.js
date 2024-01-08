function switcheroo(x){
    let arr = x
    let res = ""
for(let i = 0; i < arr.length; i++){
    if(arr[i] === "a"){
       res += "b"
    }else if(arr[i] === "b"){
        res += "a"
    }else{
        res += arr[i]
    }

}

return res
}
