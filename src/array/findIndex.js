/**
 * The findIndex() method returns the index of the first element in the 
 * array that satisfies the provided testing function. Otherwise, it 
 * returns -1, indicating that no element passed the test.
 * 
 * Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
 * @param {Array} arr - An array
 * @param {Function} callbackFn - A function to execute on each value in the array until the function returns true, indicating that the satisfying element was found.
 * It takes three arguments:
 * => element - The current element being processed in the array.
 * => index (optional) - The index of the current element being processed 
 * in the array.
 * => array (optional) - The array findIndex() was called upon.
 * 
 * @returns {Number} - The index of the first element in the array that passes the test. Otherwise, -1.
 */
const findIndex = (arr, callbackFn) => {
  if (!Array.isArray(arr)) {
    throw new Error('Please pass in an array to find index');
  }
  if (typeof callbackFn !== 'function') {
    throw new Error('Please pass in a callback to find index');
  }

  let result = -1;

  for (let i = 0; i < arr.length; i++) {
    if (!!callbackFn(arr[i], i, arr)) {
      result = i;
      break; 
    }
  }

  return result;
};

module.exports = findIndex;