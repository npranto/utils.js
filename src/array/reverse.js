/**
 * The reverse() method reverses an array in place. The first array element
 * becomes the last, and the last array element becomes the first.
 * 
 * Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 * 
 * @returns {Array} - The reversed array.
 */
const reverse = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('Please pass in an array to reverse');
  }

  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result = [...result, arr[i]];
  }
  return result;
}

module.exports = reverse;