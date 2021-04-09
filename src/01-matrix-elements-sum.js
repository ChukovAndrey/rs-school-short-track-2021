/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const matrixLength = matrix.length;
  const itemLength = matrix[0].length;
  let result = 0;
  for (let i = 0; i < matrixLength; i += 1) {
    for (let j = 0; j < itemLength; j += 1) {
      if (i === 0 || (matrix[i - 1] && matrix[i - 1][j] !== 0)) {
        result += matrix[i][j];
      }
    }
  }

  return result;
}

module.exports = getMatrixElementsSum;
