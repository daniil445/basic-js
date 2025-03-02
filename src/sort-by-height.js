const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr ) {
    let mask = [];
    let values = [];
    let ans = [];
    arr.forEach((item) => mask.push(item !== -1 ? 0 : item));
    arr.forEach(function (item) { if (item !== -1) values.push(item) });
    values.sort((a, b) => a - b);
    let count = 0;
    mask.forEach(function (item) {
        if (item !== -1) {
            ans.push(values[count]);
            count += 1;
        } else {
            ans.push(-1);
        }
    });
    return ans;
}

module.exports = {
  sortByHeight
};
