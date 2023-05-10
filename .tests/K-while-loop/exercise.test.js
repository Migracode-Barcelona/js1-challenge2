// Import the function to test
const { sumTillNum } = require("../../K-while-loop/exercise.js");

// Use the Jest testing framework
describe('sumTillNum with while loop', () => {
	test('sums numbers from 0 to 10 correctly', () => {
	expect(sumTillNum(10)).toBe(55);
	});

	test('sums numbers from 0 to 0 correctly', () => {
	expect(sumTillNum(0)).toBe(0);
	});

	test('sums numbers from 0 to 1 correctly', () => {
	expect(sumTillNum(1)).toBe(1);
	});
});
  
