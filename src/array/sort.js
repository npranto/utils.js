/**
 * The sort() method sorts the elements of an array in place and returns 
 * the sorted array. The default sort order is ascending, built upon 
 * converting the elements into strings, then comparing their sequences 
 * of UTF-16 code units values.
 * 
 * Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 * @param {Array} arr - An array
 * @param {Function} compareFunction - Specifies a function that defines the 
 * sort order. If omitted, the array elements are converted to strings, 
 * then sorted according to each character's Unicode code point value.
 * => firstEl - The first element for comparison.
 * => secondEl - The second element for comparison.
 * @returns {Array} - The element in the array matching the given index. Returns undefined if the given index can not be found.
 */
const sort = (arr, compareFunction) => {
  if (!Array.isArray(arr)) {
    throw new Error('Please pass in an array to sort');
  }
  if (!compareFunction || typeof compareFunction !== 'function') {
    throw new Error('Please pass in a comparison callback to sort array');
  }
  
  const result = [...arr];
  let currentIndex = 0, nextIndex = 1, numberOfSwaps = 0, isSorted = false;

  while (!isSorted) {
    while (nextIndex < result.length) {
      const sortValue = compareFunction(result[currentIndex], result[nextIndex]);
      if (typeof sortValue !== 'number') {
        throw new Error('Comparison callback must return a number to sort array');
      }
      if (sortValue > 0) {
        const currentIndexValue = result[currentIndex];
        const nextIndexValue = result[nextIndex];
        result[currentIndex] = nextIndexValue;
        result[nextIndex] = currentIndexValue;
        numberOfSwaps++;
      }
      currentIndex++;
      nextIndex++;
    }

    isSorted = numberOfSwaps === 0;
    currentIndex = 0;
    nextIndex = 1;
    numberOfSwaps = 0;
  }

  return result;
};

module.exports = sort;