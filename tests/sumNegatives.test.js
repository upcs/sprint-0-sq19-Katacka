const add = require('../js/functions.js');

test('Adds -1 and -63 to equal -64', () => {
  expect(add(-1, -63)).toBe(-64);
});
