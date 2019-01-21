const add = require('../js/functions.js');

test('Adds 7 and 15 to equal 22', () => {
  expect(add(7, 15)).toBe(22);
});
