/**
 * The shuffle() method is used to shuffle the items in a given array in random
 * order. A new array is returned after a shuffle, without modifying the provided
 * array argument
 * 
 * @param {Array} arr - An array
 * @returns {Array} - A new Array instance.
 */
 const shuffle = (arr) => {
  if (!arr || !Array.isArray(arr)) {
    throw new Error('Please pass in an array to shuffle items');
  }

  // do not modify existing array passed, make a copy 
  let result = [...arr];
  let lastIndex = result.length;
  let temp; // temporary placeholder during shuffle 

  while (lastIndex > 0) {
    const randomIndex = Math.floor(Math.random() * (lastIndex - 0)) + 0;
    temp = result[lastIndex - 1];
    result[lastIndex - 1] = result[randomIndex];
    result[randomIndex] = temp;
    lastIndex--;
  }

  return result;
};

module.exports = shuffle;