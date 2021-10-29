/**
 * The join() method creates and returns a new string by concatenating all of the elements in 
 * an array (or an array-like object), separated by commas or a specified separator string. If 
 * the array has only one item, then that item will be returned without using the separator.
 * 
 * Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 * @param {Array} arr - An array
 * @param {String} separator - Specifies a string to separate each pair of adjacent elements of 
 * the array. The separator is converted to a string if necessary. If omitted, the array elements 
 * are separated with a comma (","). If separator is an empty string, all elements are joined 
 * without any characters in between them.
 * @returns {String} - A string with all array elements joined. If arr.length is 0, the empty 
 * string is returned.
 */
const join = (arr, separator) => {
  if (!Array.isArray(arr)) {
    throw new Error('Please pass in an array to join separators');
  } 
  if (typeof separator === 'undefined') {
    throw new Error('Please pass in a separator to join array with');
  } 
  if (typeof separator !== 'string') {
    throw new Error('Separator must be of type string to join array');
  }

  let result = '';

  const isObject = o => (
    typeof o === 'object' 
    && !Array.isArray(o) 
    && o !== null
  );

  for (let i = 0; i < arr.length; i++) {
    const lastIndex = arr.length - 1;
    const item = isObject(arr[i]) 
      ? `[object Object]` 
      : `${arr[i] && arr[i].toString() || ''}`;
    if (i === lastIndex) {
      result = `${result}${item}`;
    } else {
      result = `${result}${item}${separator}`;
    }
  }

  return result;
}

module.exports = join;