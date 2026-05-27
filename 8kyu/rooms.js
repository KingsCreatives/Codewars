/**
 * Description:
Object debugging
While making a zork-type game, you create an object of rooms. Unfortunately, the game is not working. Find all of the errors in the rooms object to get your game working again.
Fundamentals
 */

let rooms = {
  first: {
    description: 'This is the first room', // missing comma
    items: {
      chair: 'The old chair looks comfortable',
      lamp: 'This lamp looks ancient',
    }, // missing closing brace
  },
  second: {
    description: 'This is the second room', // missing comma
    items: {
      couch: 'This couch looks like it would hurt your back', // missing closing quote
      table: 'On the table there is an unopened bottle of water',
    },
  },
};