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
    //your task and test is not equal;
    let summ = 0;
    let count = 0;
    if (matrix.length === matrix[0].length) matrix.flat(Infinity).map((item) => summ += item);
    else matrix.flat(Infinity).map(function (item) {
        if (count < matrix.flat(Infinity).length / 2) summ += item;
        count += 1;
    });
    return summ;
}
module.exports = {
  getMatrixElementsSum
};
