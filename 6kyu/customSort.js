/*
Complete the sort function so that it returns the items passed into it in alphanumerical order. Conveniently enough, the standard array sort method has been disabled for you so that you are forced to create your own.

Example:

[1,3,2]  =>  [1,2,3]
 */
function sort(items) {
  // create your custom sort logic
  let swapped
  do {
    swapped = false
    for(let i = 0; i < items.length - 1; i++){
        if(items[i] > items[i + 1]){
            const temp = items[i]
            items[i] = items[i + 1]
            items[i + 1] = temp
            swapped = true
        }
    }
    
  } while (swapped);
  return items
}

console.log(sort([1, 3, 2]));