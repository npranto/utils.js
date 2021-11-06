const isEqual = (e, a) => {
  if ((typeof e) !== (typeof a)) return false;

  if (typeof e === 'function' || typeof a === 'function') {
    return e.toString() === a.toString();
  }

  if (Array.isArray(e) || Array.isArray(a)) {
    if (e.length !== a.length) return false;
    for (let i=0; i<e.length; i++) {
      if (!isEqual(e[i], a[i])) return false;
    }
    return true;
  }

  if (e === null || a === null) {
    return e === a;
  }

  if (typeof e === 'object' || typeof a === 'object') {
    const eProps = Object.keys(e) || [];
    const aProps = Object.keys(e) || [];
    const ePropValues = Object.keys(e) || [];
    const aPropValues = Object.keys(a) || [];
    if (eProps.length !== aProps.length) return false;
    if (ePropValues.length !== aPropValues.length) return false;
    for(let j=0; j<eProps.length; j++) {
      if (eProps[j] !== aProps[j]) return false;
    }
    for(let y=0; y<ePropValues.length; y++) {
      if (isEqual(ePropValues[y], aPropValues[y])) return false;
    }
    return true;
  }
  
  return e === a;
};

const test = (id = '', expected, actual) => {
  if (id && id.length && typeof id === 'string') {
    console.info(`Testing: [${id}]`);
  }
  if (isEqual(expected, actual)) {
    console.log(`✅  => EXPECTED: [${expected}], ACTUAL: [${actual}]`);
  } else {
    console.log(`❌  => EXPECTED: [${expected}], ACTUAL: [${actual}]`);
  }
}

module.exports = { test, isEqual };