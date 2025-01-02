const fs = require('node:fs');

const readStream = fs.createReadStream('./file.txt',{
    encoding:'utf-8',
    
})

const writeStream = fs.createWriteStream('./file2.txt');

//default buffer size is 64 characters
readStream.on('data',(chunk)=>{
    console.log(chunk);
    writeStream.write(chunk);
})
