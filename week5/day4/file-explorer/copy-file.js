import fs from'fs'
fs.readFile('source.txt','utf8',(err,data)=>{
    if (err) {
        console.log("errour in source file ",err);
        return
        
        
    }
    fs.writeFile('destnation.txt',data,(err)=>{
        if (err) {
            console.log('errour in process writing distnation file',err);
            return
            
            
        }
        console.log('content copy with succes');
        
    })
})