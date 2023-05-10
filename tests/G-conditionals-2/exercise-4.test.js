const { containsCode } = require('../../G-conditionals-2/exercise-4');

test('Test containsCode function', () => {
  expect(containsCode("I love coding")).toBe("false");
  expect(containsCode("I'm not a coder")).toBe("true");
  expect(containsCode("This CODE is working.")).toBe("false");
  expect(containsCode("code is awesome!")).toBe("true");
});
