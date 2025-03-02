const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    if (options.addition === undefined) options.addition = '';

    let arr1 = [String(str) + options.addition];
    for (let index = 0; index < options.additionRepeatTimes - 1; index++) {
        arr1.push(String(options.addition));
    }
    if (options.additionSeparator === undefined) options.additionSeparator = '|';
    let ans = arr1.join(String(options.additionSeparator));
    arr1 = [];
    if (options.repeatTimes === undefined) options.repeatTimes = 1;
    for (let index = 0; index < options.repeatTimes; index++) {
        arr1.push(ans);
    }
    if (options.separator === undefined) options.separator = '+';

    return arr1.join(String(options.separator));
}
module.exports = {
  repeater
};
