const fs = require('fs');
const path = require('path');

const readStream =  fs.createReadStream(path.join(__dirname, 'text.txt'));
readStream.on('data', (read) => {
      console.log(read.toString());
   });