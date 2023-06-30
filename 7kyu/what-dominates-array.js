function dominator(arr) {
   //code me
 let occurance = {}
 let dominator = 0;
  
  arr.forEach(num =>{
    occurance[num] = occurance[num] ? occurance[num] + 1 : 1;
  })
  
  Object.keys(occurance).forEach(key =>{
    if(occurance[key] > arr.length/ 2){
      dominator = parseInt(key)
    }
  })
  
  return dominator ? dominator : -1
}
