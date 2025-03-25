/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
  solve(board, 0, 0);
}

const solve = (board: string[][], row: number, col: number): boolean => {
  if (row === board.length - 1 && col === board[row].length) 
    return true;

  if (col === board[row].length) {
    row++;
    col = 0;
  }

  if (board[row][col] !== ".") 
    return solve(board, row, col + 1);

  for (let num = 1; num <= board.length; num++) {
    if (isSafe(board, row, col, num)) {
      board[row][col] = num.toString();
      if (solve(board, row, col + 1)) return true;
    }

    board[row][col] = ".";
  }

  return false;
};

const isSafe = (board: string[][], row: number, col: number, num: number) => {
  const size = board.length;

  for (let i = 0; i < size; i++)
    if (board[row][i] === num.toString())
        return false;

  for (let i = 0; i < size; i++) 
    if (board[i][col] === num.toString())
        return false;

  const base = ~~(size ** 0.5);
  const start_row = base * ~~(row / base);
  const start_col = base * ~~(col / base);

  for (let i = start_row; i < start_row + base; i++)
    for (let j = start_col; j < start_col + base; j++) 
        if (board[i][j] === num.toString()) 
            return false;

  return true;
};