import fs from 'fs'
fs.readdir('.',(err,files)=>{
    if (err) {
        console.log('error reading directory',err);
        return
        
        
    }
    console.log('Files in the current directory:');
  files.forEach(file => {
    console.log(file);
  });
})