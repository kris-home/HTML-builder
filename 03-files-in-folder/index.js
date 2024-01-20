const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, 'secret-folder'), { withFileTypes: true }, (error, files) => {
  files.forEach((file) => {
    fs.stat(path.join(__dirname, 'secret-folder', file.name), (err, stats) => {
      if (stats.isFile()) {
        console.log(`${path.parse(file.name).name} - ${path.extname(file.name).slice(1)} - ${(stats.size / 1024).toFixed(3)}kb`)
      }
    })
  }
  )
});
