const { studentPassed } = require('../../G-conditionals-2/exercise-2');

test('Test studentPassed function', () => {
  expect(studentPassed(90)).toBe("passed");
  expect(studentPassed(50)).toBe("passed");
  expect(studentPassed(49)).toBe("failed");
  expect(studentPassed(0)).toBe("failed");
});
