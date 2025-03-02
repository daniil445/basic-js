const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    arr_chain: [],
    getLength: function (){
        return this.arr_chain.length;
  },
    addLink: function(value) { 
        this.arr_chain.push(`( ${value} )`);
        return this;
  },
    removeLink: function (position) {
        if (this.arr_chain[position - 1] === undefined) {
            this.arr_chain = [];
            throw new Error(`You can't remove incorrect link!`);
        }
        this.arr_chain = this.arr_chain.filter((_, temp) => temp !== position - 1);
        return this;
  },
    reverseChain: function () {
        this.arr_chain = this.arr_chain.reverse();
        return this;
  },
    finishChain: function () {
        let temp = this.arr_chain.join('~~')
        this.arr_chain = [];
        return temp;
    },
}

module.exports = {
  chainMaker
};
