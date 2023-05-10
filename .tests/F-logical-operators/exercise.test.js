const fs = require('fs');

test('exercise.js logs output correctly', () => {
  // Read the contents of the file
  const fileContents = fs.readFileSync('F-logical-operators/exercise.js', 'utf8');

  // Use `eval` to execute the code in the file and capture the console output
  const logs = [];
  console.log = (...args) => logs.push(args.join(' '));
  eval(fileContents);

  // Check if the logs match the expected output
  expect(logs).toEqual([
    'Is Html knowledge above 5? true',
    'Is CSS knowledge above 5? false',
    'Is Html And CSS knowledge above 5? false',
    'Is either Html or CSS knowledge above 5? true'
  ]);
});