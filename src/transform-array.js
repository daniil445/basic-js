const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    if (!Array.isArray(arr)){ 
       throw new Error("'arr' parameter must be an instance of the Array!");
    }
    let answer = [];
    let prev_command = '';
    let collission = false;
    arr.forEach(function (item) {
        
        if (typeof item === 'string') {
            if (item === '--discard-next' || item === '--discard-prev' ||
                item === '--double-next' || item === '--double-prev') {
                prev_command = item;
            } else {
                answer.push(item);
            }
            
        } else {
            if (prev_command !== '') {
                if (prev_command === '--discard-next') {
                    collission = true;
                } else if (prev_command === '--discard-prev') {
                    if (answer.length > 0) {
                        if (!collission) {
                            answer.pop();
                            answer.push(item);
                        } else {
                            answer.push(item);
                            collission = false;
                        }
                    }
                    else answer.push(item);
                } else if (prev_command === '--double-next') {

                    answer.push(item);
                    answer.push(item);
                } else if (prev_command === '--double-prev') {
                    if (answer.length > 0) {
                        if (!collission) {
                            answer.push(answer[answer.length - 1]);
                            answer.push(item);
                        } else {
                            answer.push(item);
                            collission = false;
                        }
                    } else {
                        answer.push(item);
                    }
                }
                prev_command = '';
            } else {
                answer.push(item);
            }
        }
        console.log(answer);
    });
    return answer;
}

module.exports = {
  transform
};
