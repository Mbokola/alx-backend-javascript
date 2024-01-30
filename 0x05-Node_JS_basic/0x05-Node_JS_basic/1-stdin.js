// Read-in user input
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

readline.question('Welcome to Holberton School, what is your name?', (name) => {
  console.log();
  console.log(`Your name is: ${name}`);
  console.log('This important software is now closing');
});
