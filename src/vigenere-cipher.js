const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    offset = 97;
    reverseType = false;
    constructor(type) {
        if (!type) this.reverseType = true;
        this.crypting = this.crypting.bind(this);
    }

    encrypt(mess, key) {
        if (mess === undefined || key === undefined) {
            throw new Error("Incorrect arguments!");
        }
        return this.crypting(mess, key, true);
    }

    decrypt(mess, key) {
        if (mess === undefined || key === undefined) {
            throw new Error("Incorrect arguments!");
        }
        return this.crypting(mess, key, false);
    }

    crypting(mess, key, streight) {
        let validation = -1;
        const key_arr = key.split('').map((k) => k.toLowerCase().charCodeAt(0) - this.offset);
        const text = mess.split('').map((e) => {
            if (e.toLowerCase() !== e.toUpperCase()) {
                e = e.toLowerCase().charCodeAt(0) - this.offset;
                (validation < key_arr.length - 1) ? validation += 1 : validation = 0;
                let x = key_arr[validation];
                if (streight) e = (e + x) % this.alphabet.length;
                if (!streight) e = (((e - x) > -1) && ((e - x) < this.alphabet.length)) ? (e - x) : (e - x + this.alphabet.length);
                e = String.fromCodePoint(e + this.offset).toUpperCase();
            }
            return e;
        });
        if (!this.reverseType)return text.reverse().join('');
        return text.join('');
    }
}

module.exports = {
    VigenereCipheringMachine
};
