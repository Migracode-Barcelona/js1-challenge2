const { first, last } = require('../../J-array-get-set/exercise');

describe('Array getters', () => {
    const numbers = [1, 2, 3];
    const names = ["Irina", "Ashleigh", "Mozafar", "Joe"];
  
    describe('first', () => {
      test('returns the first element of an array', () => {
        expect(first(numbers)).toBe(1);
      });
  
      test('returns undefined for an empty array', () => {
        expect(first([])).toBe(undefined);
      });
    });
  
    describe('last', () => {
      test('returns the last element of an array', () => {
        expect(last(numbers)).toBe(3);
      });
  
      test('returns undefined for an empty array', () => {
        expect(last([])).toBe(undefined);
      });
    });
  });
  
  