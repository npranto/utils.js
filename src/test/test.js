const test = (id = '', expected, actual) => {
  if (id && id.length && typeof id === 'string') {
    console.info(`Testing: [${id}]`);
  }
  if (expected !== actual) {
    console.log(`❌  => EXPECTED: [${expected}], ACTUAL: [${actual}]`);
  } else {
    console.log(`✅  => EXPECTED: [${expected}], ACTUAL: [${actual}]`);
  }
}

module.exports = test;