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
  str = String(str);
  let add = String(options.addition);
  if (!options.separator)
    options.separator = "+";
  if (!options.additionSeparator)
    options.additionSeparator = "|";
  if (options.additionRepeatTimes)
    str += Array(options.additionRepeatTimes).fill(add).join(`${options.additionSeparator}`);
  else if 
    (options.addition) str += add;
  return Array(options.repeatTimes).fill(str).join(`${options.separator}`)
}

module.exports = {
  repeater
};
