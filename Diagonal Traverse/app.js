// Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.

// Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,4,7,5,3,6,8,9]

// Example 2:

// Input: mat = [[1,2],[3,4]]
// Output: [1,2,3,4]

const findDiagonalOrder = function(mat) {
    const m = mat.length,
		n = mat[0].length,
        // create an array of arrays
		res = new Array(m + n - 1).fill().map((v) => new Array());
        console.log(res)

	for (let i = 0; i < m; i++)
		for (let j = 0; j < n; j++) res[i + j].push(mat[i][j]);

	for (let i = 0; i < res.length; i += 2) res[i].reverse();
	// return res.flat();
    console.log(res)
};

findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]])