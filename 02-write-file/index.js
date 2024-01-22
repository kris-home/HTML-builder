const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;

stdout.write('Hello!\nEnter your text\n');
fs.appendFile(path.join(__dirname, '02-write-file.txt'), '', (err) => {
  });
stdin.on('data', (data) => {
  if (data.toString().includes('exit')) process.exit();
  fs.appendFile(path.join(__dirname, '02-write-file.txt'), data.toString(), (err) => {
    })
  });

process.on('exit', () => {
  console.log('Goodbye!')
});

process.on('SIGINT', () => {
  process.exit();
});