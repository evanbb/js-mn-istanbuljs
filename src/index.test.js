const addTwoThings = require('./index');

it('adds two positive integers', () => {
  const input = [3, 5];

  expect(addTwoThings(...input)).toBe(8);
});
