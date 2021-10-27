/**
 * The concat() method is used to merge two or more arrays. This method does 
 * not change the existing arrays, but instead returns a new array.
 * 
 * Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 * @param {Array} arr - An array
 * @param {Any} items - Arrays and/or values to concatenate into a new array.
 * If all items parameters are omitted, concat returns a shallow copy of the 
 * existing array on which it is called.
 * @returns {Array} - A new Array instance.
 */
const concat = (arr, ...items) => {
  if (!arr || !Array.isArray(arr)) {
    throw new Error('Please pass in an array to concatenate items');
  }

  // do not modify existing array passed, make a copy 
  let result = [...arr];

  // go through each item passed to items  
  for(let i = 0; i < items.length; i++) {
    const item = items[i];
    // if it's an array, spread it copy array
    if (Array.isArray(item)) {
      result = [...result, ...item];
    } else { // if not an array, just add item to copy array
      result = [...result, item];
    }
  }
  
  return result;
};

module.exports = concat;