// Import the function to test
const { sumTillNum } = require("../../L-for-loop/exercise.js");

// Use the Jest testing framework
describe('sumTillNum', () => {
	// Define a single test case with multiple input/output pairs
	test.each([
	  [0, 0],     
	  [1, 1],      
	  [5, 15],     
	  [10, 55]     
	])('sums numbers from 0 to %i correctly', (input, expected) => {
	  // Call the sumTillNum function with the input value and check that the output matches the expected value
	  expect(sumTillNum(input)).toBe(expected);
	});
  });
  
