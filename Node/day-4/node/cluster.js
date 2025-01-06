const cluster = require('node:cluster');
const http = require('node:http')
const os = require('node:os')

const cpus =os.cpus().length;


// if(cluster.isMaster){
//     console.log(`MASTER process ${process.pid} is running`);
//     for(let x = 0 ;x<4;x++){
//         cluster.fork();
//     }
// }
// else{
    
    
//       console.log(`Worker ${process.pid} started`);
// }


http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(3000);



// USE PM2 PAckage for a production level multiple instance running and auto load balancing