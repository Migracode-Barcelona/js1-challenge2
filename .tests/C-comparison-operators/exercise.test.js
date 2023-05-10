const fs = require('fs');

test('exercise.js logs output correctly', () => {
  // Read the contents of the file
  const fileContents = fs.readFileSync('C-comparison-operators/exercise.js', 'utf8');

  // Use `eval` to execute the code in the file and capture the console output
  const logs = [];
  console.log = (...args) => logs.push(args.join(' '));
  eval(fileContents);

  // Check if the logs match the expected output
  expect(logs).toEqual([
    'Are there more students than mentors? true',
    'Is there enough space in the room for all students and mentors? true',
    'Do person A and person B have the the same name? false',
  ]);
});