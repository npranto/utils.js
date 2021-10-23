
const isDecimalNumber = (num) => {
  if (typeof num !== 'number') {
    throw new Error(
      'Please pass in a number to evaluate if decimal number or not'
    );
  }
  return (num - Math.floor(num)) !== 0;
}

module.exports = isDecimalNumber;