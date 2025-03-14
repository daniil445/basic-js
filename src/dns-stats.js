const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    let arr = [];
    domains.forEach(function (item) {
        let temp_str = '';
        item.split('.').reverse().forEach(function (item1) {
            temp_str = `${temp_str}.${item1}`;
            arr.push(temp_str);
        });
    });
    let data = {};
    arr.map(x => data[x] = (data[x] || 0) + 1);
    return data;
}

module.exports = {
  getDNSStats
};
