// Import the function to test
const { logDaysStartingWithT } = require("../../M-array-loop/exercise.js");

// Describe the test suite
describe("logDaysStartingWithT", () => {
  // Test case 1
  it("logs 'Tuesday' and 'Thursday'", () => {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    // Capture console output
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    
    // Call the function being tested
    logDaysStartingWithT(days);

    // Assert that console.log output matches the snapshot
    expect(console.log.mock.calls).toMatchSnapshot();

    // Clean up
    consoleSpy.mockRestore();
  });

  // Test case 2
  it("logs no days", () => {
    const days = ["Monday", "Wednesday", "Friday", "Saturday", "Sunday"];

    // Capture console output
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    
    // Call the function being tested
    logDaysStartingWithT(days);

    // Assert that console.log output matches the snapshot
    expect(console.log.mock.calls).toMatchSnapshot();

    // Clean up
    consoleSpy.mockRestore();
  });
});
