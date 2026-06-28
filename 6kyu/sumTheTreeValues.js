/**
 * Description:
Given a node object representing a binary tree:

// example of a node object:
const node = {
   value: 1,
   left: {value: 2, right: null, left: null},
   right: null
};
write a function that returns the sum of all values, including the root. Absence of a node will be indicated with a null value.

Examples:

10
| \
1  2
=> 13

1
| \
0  0
    \
     2
=> 3 
 */

function sumTheTreeValues(root) {
  if (root === null) return 0;

  return (
    root.value +
    sumTheTreeValues(root.left) +
    sumTheTreeValues(root.right)
  );
}