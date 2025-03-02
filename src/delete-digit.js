const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let ans = [];
    for (let index = 0; index < String(n).split('').length; index++) {
        const arr = String(n).split('');
        arr.splice(index, 1);
        console.log(arr);
        ans.push(Number(arr.join('')));
    }
    console.log(ans);
    return Math.max(...ans);
}

module.exports = {
  deleteDigit
};
