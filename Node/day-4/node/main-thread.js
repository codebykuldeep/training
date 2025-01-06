const http = require('node:http')
const {Worker} = require('node:worker_threads')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200);
        res.end(`hello world ${new Date()}\n`);
    }
    else if(req.url === '/slow'){
        const worker = new Worker('./worker-thread.js');
        worker.on('message',(j)=>{
            res.writeHead(200);
            res.end(`hello slow page ${new Date()}\n`);
        }) 
    }
  })


  server.listen(3000,()=>{
    console.log('server is running');
    
  });