/**
 * @param {number[][]} matrix
 * @return {boolean}
 */

const isToeplitzMatrix = (matrix) => {
  let col = 1
  let row = matrix.length - 1
  for (; row >= 0; row--) {
    if (!checkDiagonal(matrix, row, 0)) {
      return false
    }
  }
  for (; col < matrix[0].length; col++) {
    if (!checkDiagonal(matrix, 0, col)) {
      return false
    }
  }
  return true
}

const checkDiagonal = (matrix, row, col) => {
  const n = matrix[row][col]
  for (; col < matrix[0].length && row < matrix.length; row++, col++) {
    if (matrix[row][col] !== n) {
      return false
    }
  }
  return true
}

/*
A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.

Now given an M x N matrix, return True if and only if the matrix is Toeplitz.

Note:
  matrix will be a 2D array of integers.
  matrix will have a number of rows and columns in range [1, 20].
  matrix[i][j] will be integers in range [0, 99].

Follow up:

What if the matrix is stored on disk, and the memory is limited such that you can only
  load at most one row of the matrix into the memory at once?

What if the matrix is so large that you can only load up a partial row into the memory at once?
*/

export { isToeplitzMatrix,
  checkDiagonal
}
