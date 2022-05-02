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
  let s = String(n).split('').map((e) => +e);
  let a = s.slice(1);
  s.splice(s.indexOf(Math.min(...s)), 1)
  return Math.max(Number(s.join('')), Number(a.join('')));
}

module.exports = {
  deleteDigit
};
