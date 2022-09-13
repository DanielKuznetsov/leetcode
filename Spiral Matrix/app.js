// Given an m x n matrix, return all elements of the matrix in spiral order.

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

const spiralOrder = function(matrix) {
	if (matrix.length == 0) return [];
    
    let res = [];
    let row1 = 0, col1 = 0, row2 = matrix.length-1, col2 = matrix[0].length-1;
    
    while (row1 <= row2 && col1 <= col2) {
        // upper perimeter
        for (let col = col1; col <= col2; col++) {
            res.push(matrix[row1][col]);    
        }
        // right perimeter
        for (let row = row1+1; row <= row2; row++) {
            res.push(matrix[row][col2]);
        }
        if (row1 < row2 && col1 < col2) {
            // bottom perimeter
            for (let col = col2-1; col >= col1; col--) {
                res.push(matrix[row2][col]);
            }
            // left perimeter
            for (let row = row2-1; row > row1; row--) {
                res.push(matrix[row][col1]);
            }    
        }
        
        row1++, col1++, row2--, col2--;
    }
    
    return res;
};

spiralOrder([[1,2,3],[4,5,6],[7,8,9]])