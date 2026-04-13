/**
 * Introduction
We all love to play games especially as children. I have fond memories playing Connect 4 with my brother so decided to create this Kata based on the classic game. Connect 4 is known as several names such as “Four in a Row” and “Captain’s Mistress" but was made popular by Hasbro MB Games
Connect 4
Task
The game consists of a grid (7 columns and 6 rows) and two players that take turns to drop their discs. The pieces fall straight down, occupying the next available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.

Your task is to create a Class called Connect4 that has a method called play which takes one argument for the column where the player is going to place their disc.
Rules
If a player successfully has 4 discs horizontally, vertically or diagonally then you should return "Player n wins!” where n is the current player either 1 or 2.

If a player attempts to place a disc in a column that is full then you should return ”Column full!” and the next move must be taken by the same player.

If the game has been won by a player, any following moves should return ”Game has finished!”.

Any other move should return ”Player n has a turn” where n is the current player either 1 or 2.
 
Player 1 starts the game every time and alternates with player 2.

The columns are numbered 0-6 left to right.
 */

class Connect4 {
  constructor() {
    this.grid = Array.from({ length: 6 }, () => Array(7).fill(0));
    this.currentPlayer = 1;
    this.gameOver = false;
  }

  play(column) {
    if (this.gameOver) return 'Game has finished!';

    let row = -1;
    for (let r = 5; r >= 0; r--) {
      if (this.grid[r][column] === 0) {
        row = r;
        break;
      }
    }
    if (row === -1) return 'Column full!';

    this.grid[row][column] = this.currentPlayer;

    if (this.checkWin(row, column)) {
      this.gameOver = true;
      return `Player ${this.currentPlayer} wins!`;
    }

    const msg = `Player ${this.currentPlayer} has a turn`;
    this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
    return msg;
  }

  checkWin(row, col) {
    const p = this.currentPlayer;
    const directions = [
      [0, 1],
      [1, 0],
      [1, 1],
      [1, -1],
    ];

    for (const [dr, dc] of directions) {
      let count = 1;
      for (const sign of [1, -1]) {
        let r = row + dr * sign,
          c = col + dc * sign;
        while (r >= 0 && r < 6 && c >= 0 && c < 7 && this.grid[r][c] === p) {
          count++;
          r += dr * sign;
          c += dc * sign;
        }
      }
      if (count >= 4) return true;
    }
    return false;
  }
}