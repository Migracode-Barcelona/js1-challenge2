const { calculateGrade } = require('../../G-conditionals-2/exercise-3');

test('Test calculateGrade function', () => {
  expect(calculateGrade(90)).toBe("A");
  expect(calculateGrade(75)).toBe("B");
  expect(calculateGrade(55)).toBe("C");
  expect(calculateGrade(20)).toBe("F");
});