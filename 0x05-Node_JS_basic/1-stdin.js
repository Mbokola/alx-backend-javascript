// Read-in user input
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

console.log('Welcome to Holberton School, what is your name?');

readline.on('line', (name) => {
  console.log(`Your name is: ${name}`);
});

readline.on('close', () => {
  console.log('This important software is now closing');
});
