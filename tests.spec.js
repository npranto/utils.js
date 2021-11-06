const { test, isEqual } = require('./src/test/test');
const { at, isWholeNumber, isDecimalNumber, concat, reverse, sort, join, findIndex } = require('./index');
const shuffle = require('./src/array/shuffle');

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
);
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
);
test(
  'array: concat() - 3',
  concat([1,2,3]),
  [1,2,3],
);
test(
  'array: concat() - 4',
  concat([], undefined, null, 0, false, ''),
  [undefined, null, 0, false, ''],
);
test(
  'array: concat() - 5',
  concat([1,2,3], [4,5,6]),
  [1,2,3,4,5,6],
);
test(
  'array: concat() - 6',
  concat([1,2,3], [4,5,6], [8,9], 'coffee', false, ['Mango']),
  [1,2,3,4,5,6,8,9, 'coffee', false, 'Mango'],
);
test(
  'array: concat() - 7',
  concat([1,2,3], [['do', 'not', 'spread']], [3,4,5]),
  [1,2,3, ['do', 'not', 'spread'], 3,4,5],
);

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
);
test(
  'array: reverse() - 3',
  reverse([1,2,3]),
  [3,2,1],
);
test(
  'array: reverse() - 4',
  reverse([]),
  [],
);

// ========== array: sort() ==========
test(
  'array: sort() - 1',
  (() => {
    try {
      const value = sort();
      return value;
    } catch (e) {
      return e.message;
    }
  })(),
  new Error('Please pass in an array to sort').message
);
test(
  'array: sort() - 2',
  (() => {
    try {
      const value = sort('test');
      return value;
    } catch (e) {
      return e.message;
    }
  })(),
  new Error('Please pass in an array to sort').message
);
test(
  'array: sort() - 3',
  (() => {
    try {
      const value = sort([1,2,3]);
      return value;
    } catch (e) {
      return e.message;
    }
  })(),
  new Error('Please pass in a comparison callback to sort array').message
);
test(
  'array: sort() - 4',
  (() => {
    try {
      const value = sort([1,2,3], 'test');
      return value;
    } catch (e) {
      return e.message;
    }
  })(),
  new Error('Please pass in a comparison callback to sort array').message
);
test(
  'array: sort() - 5',
  (() => {
    try {
      const value = sort([1,2,3], (a, b) => {});
      return value;
    } catch (e) {
      return e.message;
    }
  })(),
  new Error('Comparison callback must return a number to sort array').message
);
test(
  'array: sort() - 6',
  (() => {
    try {
      const value = sort([1,2,3], (a, b) => false);
      return value;
    } catch (e) {
      return e.message;
    }
  })(),
  new Error('Comparison callback must return a number to sort array').message
);
test(
  'array: sort() - 7',
  sort([1,2,3], (a, b) => a - b),
  [1,2,3],
);
test(
  'array: sort() - 8',
  sort([1,2,3], (a, b) => b - a),
  [3,2,1],
);
test(
  'array: sort() - 9',
  sort(['Jack', 'Kevin', 'Brady'], (a, b) => a.length - b.length),
  ['Jack', 'Kevin', 'Brady'],
);
test(
  'array: sort() - 10',
  sort(['Jack', 'Kevin', 'Brady'], (a, b) => b.length - a.length),
  ['Kevin', 'Brady', 'Jack'],
);
test(
  'array: sort() - 11',
  sort([[1], [1,2], [1,2,4]], (a, b) => b.length - a.length),
  [[1,2,4], [1,2], [1]],
);

// ========== array: join() ==========
test(
  'array: join() - 1',
  (() => {
    try {
      const value = join();
      return value;
    } catch (e) {
      return e.message;
    }
  })(),
  new Error('Please pass in an array to join separators').message
);
test(
  'array: join() - 2',
  (() => {
    try {
      const value = join([]);
      return value;
    } catch (e) {
      return e.message;
    }
  })(),
  new Error('Please pass in a separator to join array with').message
);
test(
  'array: join() - 3',
  (() => {
    try {
      const value = join([], false);
      return value;
    } catch (e) {
      return e.message;
    }
  })(),
  new Error('Separator must be of type string to join array').message
);
test(
  'array: join() - 4',
  (() => {
    try {
      const value = join([], false);
      return value;
    } catch (e) {
      return e.message;
    }
  })(),
  new Error('Separator must be of type string to join array').message
);
test(
  'array: join() - 5',
  join(['hello', 'world'], ', '),
  'hello, world'
);
test(
  'array: join() - 6',
  join([undefined, 'test'], ', '),
  ', test'
);
test(
  'array: join() - 7',
  join([undefined, null], ', '),
  ', '
);
test(
  'array: join() - 8',
  join([
    function a() { return 'a'; }, 
    function b() { return 'b'; },
  ], '+'),
  'function a() { return \'a\'; }+function b() { return \'b\'; }'
);
test(
  'array: join() - 9',
  join([
    { name: 'Jack'}, 
    {name: 'Kevin'},
    'nice'
  ], ',,'),
  '[object Object],,[object Object],,nice'
);
test(
  'array: join() - 10',
  join([[1], [1,2], [1,2,4]], ''),
  '11,21,2,4'
);

// ========== array: findIndex() ==========
test(
  'array: findIndex() - 1',
  (() => {
    try {
      const value = findIndex();
      return value;
    } catch (e) {
      return e.message;
    }
  })(),
  new Error('Please pass in an array to find index').message
);
test(
  'array: findIndex() - 2',
  (() => {
    try {
      const value = findIndex([], false);
      return value;
    } catch (e) {
      return e.message;
    }
  })(),
  new Error('Please pass in a callback to find index').message
);
test(
  'array: findIndex() - 3',
  findIndex([1,2,3], (elem) => elem === 2),
  1
);
test(
  'array: findIndex() - 4',
  findIndex(['hello', 'world'], (elem) => elem === 'hello'),
  0,
);
test(
  'array: findIndex() - 5',
  findIndex(['hello', 'world'], (elem) => elem === 'test'),
  -1,
);
test(
  'array: findIndex() - 6',
  findIndex(['hello', 'world'], (elem, index) => index === 0),
  0,
);

// ========== array: shuffle() ==========
test(
  'array: shuffle() - 1',
  (() => {
    try {
      const value = shuffle();
      return value;
    } catch (e) {
      return e.message;
    }
  })(),
  new Error('Please pass in an array to shuffle items').message
);
test(
  'array: shuffle() - 2',
  (() => {
    try {
      const value = shuffle(false);
      return value;
    } catch (e) {
      return e.message;
    }
  })(),
  new Error('Please pass in an array to shuffle items').message
);
test(
  'array: shuffle() - 3',
  (() => {
    return !isEqual(shuffle([1,2,3,4,5]), [1,2,3,4,5]);
  })(),
  true,
);
test(
  'array: shuffle() - 4',
  (() => {
    return isEqual(shuffle([]), []);
  })(),
  true,
);
test(
  'array: shuffle() - 5',
  (() => {
    return !isEqual(
      shuffle([{ a: 1 }, 'coffee', false]), 
      [{ a: 1 }, 'coffee', false]
    );
  })(),
  true,
);
