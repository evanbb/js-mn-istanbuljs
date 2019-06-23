const multiplyTwoThings = require('./some-consumer');

it('multiplies two positive integers', () => {
  const result = multiplyTwoThings(5, 2);
  expect(result).toBe(10);
});
