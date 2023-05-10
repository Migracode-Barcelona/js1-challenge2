const isEmpty = require('../../I-array-properties/exercise');

test('checks if array is empty', () => {
  expect(isEmpty([1, 2, 3])).toBe(false);
  expect(isEmpty([])).toBe(true);
});

