
const fs = require('node:fs')

const file = fs.readFileSync('./file.txt','utf-8');
console.log(file);

//asynchronous
fs.readFile('./file.txt','utf-8',(error,data)=>{
    if(error)
        console.log(error);
    else
        console.log(data);
        
})

console.log('DONE reading');

//synchronous
fs.writeFileSync('./write.txt','THIS IS WRITTEN USING NODE')

//append
fs.writeFile('./write.txt','\n THIS IS THE NEW CONTENT',{flag:'a'},(error,data)=>{
    if(error)
        console.log(error);
    else
        console.log('DONE WRTING');
        
})
