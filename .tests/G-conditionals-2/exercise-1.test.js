const { negativeOrPositive } = require('../../G-conditionals-2/exercise-1');

test('Test negativeOrPositive function', () => {
  expect(negativeOrPositive(-1)).toBe("negative");
  expect(negativeOrPositive(0)).toBe("positive");
  expect(negativeOrPositive(1)).toBe("positive");
  expect(negativeOrPositive(-100)).toBe("negative");
  expect(negativeOrPositive(100)).toBe("positive");
});