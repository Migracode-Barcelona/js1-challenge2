const fs = require('fs');

test('exercise.js logs output correctly', () => {
  // Read the contents of the file
  const fileContents = fs.readFileSync('H-array-literals/exercise.js', 'utf8');

  // Use `eval` to execute the code in the file and capture the console output
  const logs = [];
  console.log = (...args) => logs.push(args.join(' '));
  eval(fileContents);

  // Check if the logs match the expected output
  expect(logs).toEqual([
    '1,2,3,4,5,6,7,8,9,10',
    "Daniel,Irina,Rares"
  ]);
});