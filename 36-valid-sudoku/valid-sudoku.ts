function isValidSudoku(board: string[][]): boolean {
  const size = board.length;
  const base = size ** 0.5;

  for (let i = 0; i < size; i++) {
    const rowSet = new Set<string>();
    const colSet = new Set<string>();

    for (let j = 0; j < size; j++) {
      const rowVal = board[i][j];
      const colVal = board[j][i];

      if (rowVal !== ".") {
        if (rowSet.has(rowVal)) return false;
        rowSet.add(rowVal);
      }

      if (colVal !== ".") {
        if (colSet.has(colVal)) return false;
        colSet.add(colVal);
      }
    }
  }

  for (let i = 0; i < size; i += base) {
    for (let j = 0; j < size; j += base) {
      const squareSet = new Set<string>();

      for (let k = i; k < i + base; k++) {
        for (let l = j; l < j + base; l++) {
          const squareVal = board[k][l];

          if (squareVal !== ".") {
            if (squareSet.has(squareVal)) return false;
            squareSet.add(squareVal);
          }
        }
      }
    }
  }

  return true;
}