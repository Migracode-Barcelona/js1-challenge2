const { isNegative, isBetween5and10, isShortName, startsWithD } = require("../../F-logical-operators/exercise2.js");

test('Test isNegative function', () => {
  expect(isNegative(-1)).toBe(true);
  expect(isNegative(0)).toBe(false);
  expect(isNegative(1)).toBe(false);
});

test('Test isBetween5and10 function', () => {
  expect(isBetween5and10(4)).toBe(false);
  expect(isBetween5and10(5)).toBe(true);
  expect(isBetween5and10(10)).toBe(true);
  expect(isBetween5and10(11)).toBe(false);
});

test('Test isShortName function', () => {
  expect(isShortName('Bob')).toBe(true);
  expect(isShortName('Valentina')).toBe(false);
  expect(isShortName('Jean-Pierre')).toBe(false);
});

test('Test startsWithD function', () => {
  expect(startsWithD('Daniel')).toBe(true);
  expect(startsWithD('daniel')).toBe(false);
  expect(startsWithD('Bob')).toBe(false);
});