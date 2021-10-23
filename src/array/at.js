const test = require("../test/test");

/**
 * The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. 
 * Negative integers count back from the last item in the array.
 * 
 * Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at
 * @param {Array} arr - An array
 * @param {Number} index - The index (position) of the array element to be returned. Supports relative indexing from the end 
 * of the array when passed a negative index; i.e. if a negative number is used, the element returned will be found by counting back from the end of the array.
 * @returns {Any} - The element in the array matching the given index. Returns undefined if the given index can not be found.
 */
const at = (arr, index) => {
  if (!arr || !Array.isArray(arr)) {
    throw new Error('Please pass in an array to find value at an index');
  }
  if (typeof index !== 'number') {
    throw new Error('Please pass in a number for index');
  }
  if (index < 0 && (Math.abs(index) <= arr.length)) {
    return arr[arr.length - Math.abs(index)];
  }
  return arr[index];
}

module.exports = at;