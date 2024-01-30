// Read-in user input
process.stdin.setEncoding('utf8');
process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('data', (data) => {
  const name = data.trim();
  if (process.send) {
    console.log()
  }
  console.log(`Your name is: ${name}`);
  console.log('This important software is now closing');
  process.exit();
});
