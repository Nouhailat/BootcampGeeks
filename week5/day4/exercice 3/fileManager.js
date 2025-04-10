const fs=require('fs')
function readFile(filepath) {
    try {
        const data=fs.readFileSync(filepath,'utf-8')
        return data
        
    } catch (error) {
        console.log(`erreur de read file ${error.message}`);
        return null
        
        
    }

    
}
function writeFile(filepath,content) {
    try {
        fs.writeFileSync(filepath,content)
    console.log("ecriture with succes");
    
            
    } catch (error) {
       console.log(`erreur de read file ${error.message}`);
       return null
            
            
        }
        
        
    }
    
module.exports={
    readFile,
    writeFile
}