const isWholeNumber = (num) => {
  if (typeof num !== 'number') {
    throw new Error(
      'Please pass in a number to evaluate if whole number or not'
    );
  }
  return (num - Math.floor(num)) === 0;
}

module.exports = isWholeNumber;