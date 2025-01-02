const fs = require('node:fs/promises');


fs.readFile('./file.txt','utf-8')
.then((data=>console.log(data)))
.catch(err=>console.log(errr))

async function writeData(text) {
    await fs.writeFile('./fsAwait.txt',text)
    console.log('writing done');
    
}
writeData('write this in file');