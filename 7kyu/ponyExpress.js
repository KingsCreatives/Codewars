/**
 * 
 *
The Pony Express was a mail service operating in the US in 1859-60.

Pony Express
It reduced the time for messages to travel between the Atlantic and Pacific coasts to about 10 days, before it was made obsolete by the transcontinental telegraph.

How it worked
There were a number of stations, where:

The rider switched to a fresh horse and carried on, or
The mail bag was handed over to the next rider
Kata Task
stations is a list/array of distances (miles) from one station to the next along the Pony Express route.

Implement the riders method/function, to return how many riders are necessary to get the mail from one end to the other.

NOTE: Each rider travels as far as he can, but never more than 100 miles.} stations 
//  
 */

// solution
function riders(stations) {
  let riders = 1;
  let distanceCovered = 0;
  for(let i = 0; i < stations.length - 1; i++){
       distanceCovered+= stations[i]
       if(distanceCovered + stations[i + 1] > 100){
        riders++
        distanceCovered = 0
       }
  }
  return riders
}


console.log(
  riders([
    12, 9, 18, 11, 20, 25, 10, 23, 7, 23, 7, 15, 12, 22, 25, 12, 11, 22, 12, 22,
    19, 16, 14, 13, 12, 15, 21, 25, 20, 18, 19, 19, 14, 6, 5, 10, 12, 10, 19,
    15, 9, 5, 24, 5, 18, 21, 15, 7, 16, 13, 12, 6, 17, 17, 23, 14, 11, 22, 18,
    5, 22, 20, 6, 22, 7, 10, 9, 13, 10, 12, 20, 11, 5, 6, 14, 15, 17, 18, 7, 13,
    17, 22, 24, 16, 6, 11, 12, 12, 8, 25, 22, 24, 20, 19, 23, 23, 23, 10, 19,
    11, 18, 8, 12, 10, 24, 19, 7, 20, 8, 9, 7, 8, 14, 7, 6, 24, 11, 24, 18, 11,
    13, 22, 16, 6, 7, 17, 12, 7, 13, 24, 23, 9, 9, 12, 21, 10, 8, 5, 7, 14, 17,
    24, 7, 21, 8, 15, 23, 25, 16, 13, 10, 18, 10, 10, 6, 10, 18, 20, 22, 23, 5,
    22, 20, 21, 7, 13, 14, 9, 17, 20, 23, 14, 23, 24, 25, 11, 5, 24, 20, 17, 18,
    20, 11, 24,
  ])
);
