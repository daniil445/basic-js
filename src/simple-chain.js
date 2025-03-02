const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    arr_chain =[],
    getLength() {
        return arr_chain.length;
  },
    addLink(value) {
        if (typeof value === 'string') arr_chain.push(value);
  },
    removeLink(position) {
        if (position < arr_chain.length) arr_chain.splice(position, 1);
  },
    reverseChain() {
        arr_chain.reverse();
  },
    finishChain() {
        let answer = '';
        arr_chain.forEach(function (item) {
            if (answer.length > 0) answer += '~~';
            answer += `( ${item} )`;
        });
      return arr_chain;
  }
};

module.exports = {
  chainMaker
};
