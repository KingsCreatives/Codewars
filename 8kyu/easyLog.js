/*
Given a logarithm base X and two values A and B, return a sum of logratihms with the base X: 
log
⁡
�
�
+
log
⁡
�
�
log 
X
​
 A+log 
X
​
 B.
 */

//  solution
function logs(x , a, b){
    let logA = Math.log(a) / Math.log(x)
    let logB = Math.log(b) / Math.log(x)
    return logA + logB
  }


    console.log(logs(5,2,3))