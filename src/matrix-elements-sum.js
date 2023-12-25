const { NotImplementedError } = require('../extensions/index.js');

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
  let counterSum = 0;
  for (let row = 0; row < matrix[0].length; row++) {
    for (let column = 0; column < matrix.length; column++) {
      if (matrix[column][row] !== 0 ) {
        counterSum = counterSum + matrix[column][row];  
      }  else {
        break;
      }
    }
  }
  return counterSum
}

module.exports = {
  getMatrixElementsSum
};
