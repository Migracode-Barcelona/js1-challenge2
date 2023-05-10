const fs = require('fs');

test('exercise.js logs expected message', () => {
  // Replace the global console.log function with a Jest spy
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

  // Execute the code in the exercise2.js file
  const fileContents = fs.readFileSync('E-conditionals/exercise.js', 'utf8');
  eval(fileContents);

  // Check if the expected log was output to the console
  expect(consoleSpy).toHaveBeenCalledWith("Hi, I'm Daniel, I'm a mentor.");

  // Restore the original console.log function
  consoleSpy.mockRestore();
});
