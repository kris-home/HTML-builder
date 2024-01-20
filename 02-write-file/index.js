const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;

stdout.write('Hello!\nEnter your text\n');
stdin.on('data', (data) => {
  fs.appendFile(
    path.join(__dirname, '02-write-file.txt'),
    data.toString(),
    (err) => {
      if (err) throw err;
    },
  );
});

process.on('exit', () => {
  console.log('Goodbye!')
});

process.on('SIGINT', () => {
  process.exit();
});