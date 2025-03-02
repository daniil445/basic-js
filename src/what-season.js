const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
    if (!date) return "Unable to determine the time of year!";
    if (Object.getOwnPropertyNames(date).length > 0)  throw new Error("Invalid date!");
    if (typeof date.getFullYear !== 'function') throw new Error("Invalid date!");
    const Northern_seasons = ['winter', 'spring', 'summer', 'autumn'];
    let new_date = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    return Northern_seasons[Math.floor(((new_date.getMonth() + 1) / 12 * 4)) % 4];
}

module.exports = {
  getSeason
};
