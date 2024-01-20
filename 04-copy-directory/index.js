const fs = require('fs');
const path = require('path');

copyDir();

function copyDir() {
  fs.rmdir(path.join(__dirname, 'files-copy'), { recursive: true }, (error) => {
    fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, (error) => {
      fs.readdir(path.join(__dirname, 'files'), (error, files) => {
        files.forEach((file) => {
          fs.copyFile(path.join(__dirname, 'files', file), path.join(__dirname, 'files-copy', file), (error) => {
          })
        });
      })
    })
  })
  console.log("Copying files from the 'files' folder to the 'files-copy' folder is complete.")
}