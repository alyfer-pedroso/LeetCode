function exist(board: string[][], word: string): boolean {
    const m = board.length;
    const n = board[0].length;

    function dfs(i: number, j: number, k: number): boolean {
        if (k === word.length) return true;
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[k]) return false;

        const temp = board[i][j];
        board[i][j] = "#";

        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        for (const [dx, dy] of directions) {
            const newI = i + dx;
            const newJ = j + dy;
            if (dfs(newI, newJ, k + 1)) return true;
        }

        board[i][j] = temp;
        return false;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0] && dfs(i, j, 0)) return true;
        }
    }
    
    return false;
};