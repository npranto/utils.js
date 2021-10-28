const test = require('./src/test/test');
const { at, isWholeNumber, isDecimalNumber, concat, reverse } = require('./index');

// ========== array: at() ==========
test(
  'array - at() - 1',
  (() => {
    try {
      const value = at();
      return value;
    } catch (e) {
      return e.message;
    }
  })(),
  new Error('Please pass in an array to find value at an index').message
);
test(
  'array - at() - 2',
  (() => {
    try {
      const value = at([]);
      return value;
    } catch (e) {
      return e.message;
    }
  })(),
  new Error('Please pass in a number for index').message
);
test('array - at() - 3', at([1,2,3], 0), 1);
test('array - at() - 4', at([1,2,3], 2), 3);
test('array - at() - 5', at([1,2,3], -2), 2);
test('array - at() - 6', at([1,2,3], 5), undefined);
test('array - at() - 7', at([1,2,3], -30), undefined);

// ========== number: isWholeNumber() ==========
test(
  'number: isWholeNumber() - 1',
  (() => {
    try {
      const value = isWholeNumber();
      return value;
    } catch (e) {
      return e.message;
    }
  })(),
  new Error('Please pass in a number to evaluate if whole number or not').message
);
test(
  'number: isWholeNumber() - 2',
  (() => {
    try {
      const value = isWholeNumber('test');
      return value;
    } catch (e) {
      return e.message;
    }
  })(),
  new Error('Please pass in a number to evaluate if whole number or not').message
);
test(
  'number: isWholeNumber() - 3',
  (() => {
    try {
      const value = isWholeNumber(0);
      return value;
    } catch (e) {
      return e.message;
    }
  })(),
  true
);
test('number: isWholeNumber() - 4', isWholeNumber(10), true);
test('number: isWholeNumber() - 5', isWholeNumber(10.00), true);
test('number: isWholeNumber() - 6', isWholeNumber(10.33), false);
test('number: isWholeNumber() - 7', isWholeNumber(-10), true);
test('number: isWholeNumber() - 8', isWholeNumber(-10.66), false);

// ========== number: isDecimalNumber() ==========
test(
  'number: isDecimalNumber() - 1',
  (() => {
    try {
      const value = isDecimalNumber();
      return value;
    } catch (e) {
      return e.message;
    }
  })(),
  new Error('Please pass in a number to evaluate if decimal number or not').message
);
test(
  'number: isDecimalNumber() - 2',
  (() => {
    try {
      const value = isDecimalNumber('test');
      return value;
    } catch (e) {
      return e.message;
    }
  })(),
  new Error('Please pass in a number to evaluate if decimal number or not').message
);
test(
  'number: isDecimalNumber() - 3',
  (() => {
    try {
      const value = isDecimalNumber(0);
      return value;
    } catch (e) {
      return e.message;
    }
  })(),
  false,
);
test('number: isDecimalNumber() - 4', isDecimalNumber(10), false);
test('number: isDecimalNumber() - 5', isDecimalNumber(10.00), false);
test('number: isDecimalNumber() - 6', isDecimalNumber(10.33), true);
test('number: isDecimalNumber() - 7', isDecimalNumber(-10), false);
test('number: isDecimalNumber() - 8', isDecimalNumber(-10.66), true);

// ========== array: concat() ==========
test(
  'array: concat() - 1',
  (() => {
    try {
      const value = concat();
      return value;
    } catch (e) {
      return e.message;
    }
  })(),
  new Error('Please pass in an array to concatenate items').message
)
test(
  'array: concat() - 2',
  (() => {
    try {
      const value = concat('test');
      return value;
    } catch (e) {
      return e.message;
    }
  })(),
  new Error('Please pass in an array to concatenate items').message
)
test(
  'array: concat() - 3',
  concat([1,2,3]),
  [1,2,3],
)
test(
  'array: concat() - 4',
  concat([], undefined, null, 0, false, ''),
  [undefined, null, 0, false, ''],
)
test(
  'array: concat() - 5',
  concat([1,2,3], [4,5,6]),
  [1,2,3,4,5,6],
)
test(
  'array: concat() - 6',
  concat([1,2,3], [4,5,6], [8,9], 'coffee', false, ['Mango']),
  [1,2,3,4,5,6,8,9, 'coffee', false, 'Mango'],
)
test(
  'array: concat() - 7',
  concat([1,2,3], [['do', 'not', 'spread']], [3,4,5]),
  [1,2,3, ['do', 'not', 'spread'], 3,4,5],
)

// ========== array: reverse() ==========
test(
  'array: reverse() - 1',
  (() => {
    try {
      const value = reverse();
      return value;
    } catch (e) {
      return e.message;
    }
  })(),
  new Error('Please pass in an array to reverse').message
)
test(
  'array: reverse() - 2',
  (() => {
    try {
      const value = reverse(null);
      return value;
    } catch (e) {
      return e.message;
    }
  })(),
  new Error('Please pass in an array to reverse').message
)
test(
  'array: reverse() - 3',
  reverse([1,2,3]),
  [3,2,1],
)
test(
  'array: reverse() - 4',
  reverse([]),
  [],
)