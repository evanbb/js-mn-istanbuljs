const addTwoThings = require('./index');

const input = [3,5];

const result = addTwoThings(...input);
const expectedResult = 8;

if (result !== expectedResult) {
  throw new Error(`did not get expected result for "addTwoThings". expected ${expectedResult}, but got ${result}`);
}

// ... ugh, this is PAINFUL
// we need a way to group tests and catch errors for failures...
// testing different permutations is going to be a maintenance nightmare
