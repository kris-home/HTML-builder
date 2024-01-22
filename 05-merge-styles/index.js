const fs = require('fs');
const path = require('path');
let arr = [];

fs.readdir(path.join(__dirname, 'styles'), { withFileTypes: true }, (error, files) => {
  files.forEach((file) => {
    if (file.isFile && path.extname(file.name) === '.css') {
      fs.readFile(path.join(__dirname, 'styles', file.name), (err, data) => {
        arr.push(data);
        fs.unlink(path.join(__dirname, 'project-dist', 'bundle.css'), (err) => {
          fs.appendFile(path.join(__dirname, 'project-dist', 'bundle.css'), data, (err) => {
          })
        });
      });
    }
  });
  console.log('Merging .css files from "styles" folder completed successfully')
}
)
