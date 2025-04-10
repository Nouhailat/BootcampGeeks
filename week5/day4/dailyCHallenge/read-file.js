import fs from 'fs'
export function readFileContent() {
    fs.readFile('./files/file-data.txt', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
      } else {
        console.log('File content:', data);
      }
    });
  }