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
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`)
  }

  const tempArr = [...arr]
  tempArr.forEach((el, i, tempArr) => {
    if (el === '--discard-next') {
      tempArr[i] = 'discard'
      tempArr[i + 1] = 'discard'
    } else if (el === '--discard-prev') {
      if (i > 0) {
        tempArr[i] = 'discard'
        tempArr[i - 1] = 'discard'
      } else {
        tempArr[i] = 'discard'
      }
    } else if (el === '--double-prev') {
      if (i > 0 && tempArr[i - 1] !== 'discard') {
        tempArr[i] = tempArr[i - 1]
      } else {
        tempArr[i] = 'discard'
      }
    } else if (el === '--double-next') {
      if (i < tempArr.length - 1) {
        tempArr[i] = tempArr[i + 1]
      } else {
        tempArr[i] = 'discard'
      }
    }
  })

  return tempArr.filter((el) => {
    return el === 'discard' ? false : true
  })
}

module.exports = {
  transform
};
