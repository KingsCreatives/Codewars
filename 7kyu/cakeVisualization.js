/**
 * Description:
Disclaimer
This kata is in accordance with the EPIC challenge in relation to Andela's 10 year anniversary celebration. You can find more info here

Story
ejini战神 has recently quit his programming job and is now opting in for a career change. He has decided to settle in the baking industry and is now a worker of a cake franchise designated for wedding celebrations. He has come up with a creative wedding cake model and a unique box that can modify the cake in a certain way that can blow away all the attendees!!! (How cool is that~ 😏)

Task
Given the cake model, your job is to help ejini战神 write a program that can instantly display the final visualization of the cake model after the unique box has been unfolded.

Initial cake model below:

    /|\
   \/ \/
  \ | | \
  /\/\/\/
 /       \
/|||||||||\
The final visualization:

    /|\
   \ | /
  \  |  \
  /  |  /
 /   |   \
/    |    \
More examples:

      \         \
    // |||||||||\\/
   \\\\\\\\\\\\\\\\\
   / /| \ /\|\ /| |/
/||||||||\/| /\||||||\\
becomes

      \    |    \
    /      |      /
   \       |       \
   /       |       /
/          |          \
   /         \
   /         \ 
   /         \
   /         \
   /         \
   /         \ 
becomes

   /    |    \
   /    |    \ 
   /    |    \
   /    |    \
   /    |    \
   /    |    \ 
Notes

Each cake model will have at least 1 layer (row), separated by a newline character (\n)
Each layer will only consist of odd number of filling space
The lower layer will have equal or more filling space than the upper ones
Each layer will always start and end with / or \ fillings
Starting and ending position of each layer will not overlap
Inner fillings of the cake may be /, \ or |
Some part of the cake do not have fillings (due to the semi-functional cake creation model...)
Trailing and leading spaces for the visualization above will not be included in the cake model's input and final output.
\\ for visualization above only is considered as 2 fillings rather than 1.
Output should be the same as the given input except with all fillings of each layer centralized whilst leaving a starting and ending filling to prevent it from overflow ^^. (Refer to examples above)
 */


function cakeVisualizer(s) {
  return s
    .split('\n')
    .map((row) => {
      const start = row[0];
      const end = row[row.length - 1];
      const innerWidth = row.length - 2;
      const sideSpaces = Math.floor(innerWidth / 2);

      return (
        start + ' '.repeat(sideSpaces) + '|' + ' '.repeat(sideSpaces) + end
      );
    })
    .join('\n');
}
