/*
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.


 */
function well(x){
  let count = {}
  for(const ideas of x){
    count[ideas] = (count[ideas] || 0) + 1;
  }

  // Check the count of good ideas
  const goodCount = count["good"] || 0;

  // Determine the result based on the count of good ideas
  if(goodCount === 0) {
    return "Fail";
  } else if (goodCount <= 2) {
    return "Publish!";
  } else {
    return "I smell a series!";
  }
    
return count
}
// console.log(well())
// console.log(well(['bad', 'bad', 'bad']), 'Fail!');
// console.log(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
// console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');

console.log(well(["bad","bad","bad","bad","good","bad","bad","bad","bad"]))
