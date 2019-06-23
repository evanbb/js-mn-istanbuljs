const addTwoThings = require('./index');

module.exports = function multiplyTwoThings(a, b) {
  const result = Array(a)
    .fill(undefined)
    .reduce(agg => addTwoThings(agg, b), 0);

  return result;
};
