const uniqOld = (arr) => {
  const arrayWithUniqueElements = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (!arrayWithUniqueElements.includes(arr[i])) {
      arrayWithUniqueElements.push(arr[i]);
    }
  }

  return arrayWithUniqueElements;
};

//Syntax => arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])

const uniq = (arr) => {
  const reducer = (accumulator, currentValue) => {
    if (!accumulator.includes(currentValue)) {
      return [...accumulator, currentValue];
    }
    return accumulator;
  };
  return arr.reduce(reducer, []);
};

module.exports = uniq;
