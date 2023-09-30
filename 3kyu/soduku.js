function sudoku(puzzle) {
    // Get all the empty positions in the puzzle
    var emptyPositions = getEmptyPositions(puzzle);
    // Start iterating over the empty positions
    var i = 0;
    while (i < emptyPositions.length) {
      var row = emptyPositions[i][0];
      var col = emptyPositions[i][1];
      // Try to fill in a number from 1 to 9 that is valid according to the Sudoku rules
      var value = puzzle[row][col] + 1;
      var found = false;
      while (!found && value <= 9) {
        if (isValid(puzzle, row, col, value)) {
          found = true;
          puzzle[row][col] = value;
          i++;
        } else {
          value++;
        }
      }
      // If we exhaust all possibilities without finding a valid number, backtrack to the previous position and try a different number
      if (!found) {
        puzzle[row][col] = 0;
        i--;
      }
    }
    // Return the solved Sudoku
    return puzzle;
  }
  
  function getEmptyPositions(puzzle) {
    var emptyPositions = [];
    for (var row = 0; row < puzzle.length; row++) {
      for (var col = 0; col < puzzle[row].length; col++) {
        if (puzzle[row][col] === 0) {
          emptyPositions.push([row, col]);
        }
      }
    }
    return emptyPositions;
  }
  
  function isValid(puzzle, row, col, value) {
    // Check whether the given number is valid at the given position according to the Sudoku rules
    for (var i = 0; i < puzzle[row].length; i++) {
      if (puzzle[row][i] === value) {
        return false;
      }
    }
    for (var i = 0; i < puzzle.length; i++) {
      if (puzzle[i][col] === value) {
        return false;
      }
    }
    var boxRow = Math.floor(row / 3) * 3;
    var boxCol = Math.floor(col / 3) * 3;
    for (var i = boxRow; i < boxRow + 3; i++) {
      for (var j = boxCol; j < boxCol + 3; j++) {
        if (puzzle[i][j] === value) {
          return false;
        }
      }
    }
    return true;
  }
  
