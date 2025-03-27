function searchMatrix(matrix: number[][], target: number): boolean {
    for (let i = 0; i < matrix.length; i++) {
        let left = 0;
        let right = matrix[i].length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            
            if (matrix[i][mid] === target) {
                return true;
            }

            if (matrix[i][mid] < target) {
                left = mid + 1;
                continue;
            }

            right = mid - 1;
        }
    }
    
    return false;
};