const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'project-dist'), (err) => {
  fs.copyFile(path.join(__dirname, 'template.html'), path.join(__dirname, 'project-dist', 'index.html'), err => {
    replace();
    createAssets();
    createStyles();
  });
  console.log('Created HTML pages from components and styles')
});

async function createStyles() {
  fs.readdir(path.join(__dirname, 'styles'), { withFileTypes: true }, (error, files) => {
    files.forEach((file) => {
      if (file.isFile && path.extname(file.name) === '.css') {
        fs.readFile(path.join(__dirname, 'styles', file.name), (err, data) => {
          fs.unlink(path.join(__dirname, 'project-dist', 'style.css'), (err) => {
            fs.appendFile(path.join(__dirname, 'project-dist', 'style.css'), data, (err) => {
            })
          });
        });
      }
    });
  });
}

async function createAssets() {
  await fs.rmdir(path.join(__dirname, 'project-dist', 'assets'),{ recursive: true }, (err) => {
   fs.mkdir(path.join(__dirname, 'project-dist', 'assets'), (err) => {
    fs.readdir(path.join(__dirname, 'assets'), (error, dir) => {
       dir.forEach((dir) => {
         fs.mkdir(path.join(__dirname, 'project-dist', 'assets', dir), (err) => {
         })
         fs.readdir(path.join(__dirname, 'assets', dir), (error, files) => {
           files.forEach((files) => {
             fs.copyFile((path.join(__dirname, 'assets', dir, files)), (path.join(__dirname, 'project-dist', 'assets', dir, files)), (error, files) => {
             });
           });
         });
       });
     });
   });
});
}

async function replace() {
  await fs.readFile(path.join(__dirname, 'project-dist', 'index.html'), (err, data) => {
    data = data.toString();
    fs.readdir(path.join(__dirname, 'components'), { withFileTypes: true }, (err, dataComponents) => {
      dataComponents.forEach((components) => {
        if (components.isFile()) {
          let name = components.name.slice(0, -5);
          fs.readFile(path.join(__dirname, 'components', components.name), (err, dataFile) => {
            while(data.includes(`{{${name}}}`)){
            data = data.replace(`{{${name}}}`, dataFile);
          }
            fs.writeFile(path.join(__dirname, 'project-dist', 'index.html'), data, () => { });
          })
        }
      });
    });
  });
}