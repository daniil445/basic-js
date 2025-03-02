const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
    let ans = [];
    for (let i = 0; i < matrix.length; i += 1) {
        let line = [];
        for (let j = 0; j < matrix[0].length; j += 1) {
            let mines_around = 0;

            let mines_top = (matrix[i - 1] === undefined) ? 0 : Number(matrix[i - 1][j]);
            let mines_left = (matrix[i][j - 1] === undefined) ? 0 : Number(matrix[i][j - 1]);
            let mines_bot = (matrix[i + 1] === undefined) ? 0 : Number(matrix[i + 1][j]);
            let mines_right = (matrix[i][j + 1] === undefined) ? 0 : Number(matrix[i][j + 1]);

            let mines_top_left = (matrix[i - 1] === undefined) ? 0 : (matrix[i - 1][j - 1] === undefined) ? 0 : Number(matrix[i - 1][j - 1]);
            let mines_top_right = (matrix[i - 1] === undefined) ? 0 : (matrix[i - 1][j + 1] === undefined) ? 0 : Number(matrix[i - 1][j + 1]);
            let mines_bot_left = (matrix[i + 1] === undefined) ? 0 : (matrix[i + 1][j - 1] === undefined) ? 0 : Number(matrix[i + 1][j - 1]);
            let mines_bot_right = (matrix[i + 1] === undefined) ? 0 : (matrix[i + 1][j + 1] === undefined) ? 0 : Number(matrix[i + 1][j + 1]);

            mines_around = mines_top + mines_left + mines_bot + mines_right
                + mines_top_left + mines_top_right + mines_bot_left + mines_bot_right;
            console.log(`summ ${ mines_around }`);
            line.push(mines_around);
        }
        ans.push(line);
    }
    return ans;
}

module.exports = {
  minesweeper
};
