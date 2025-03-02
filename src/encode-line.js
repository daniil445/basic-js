const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    if (str === '') return str;
    let letter_temp = '';
    let count = 0;
    let answer = '';
    str.split('').forEach(function (item) {
        console.log(item);
        if (letter_temp === item) {
            count += 1;
        } else {
            if (count !== 0) {
                if (count === 1) answer += `${letter_temp}`;
                else answer += `${String(count)}${letter_temp}`;
                
            } 
            letter_temp = item; 
            count = 1;
        }
    });
    if (count === 1) answer += `${letter_temp}`;
    else answer += `${String(count)}${letter_temp}`;
    return answer;
}

module.exports = {
  encodeLine
};
