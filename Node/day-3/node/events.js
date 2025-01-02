const EventEmitter = require('node:events');

const emitter = new EventEmitter();

emitter.on('order',(size,topping)=>{
    console.log(`order recieved. Pizza size is ${size} and topping is ${topping}`);
})
emitter.on('order',(size)=>{
   if(size === 'large'){
    console.log(`Eligible for drinks`);
   }
});

emitter.emit('order','large','tomato');
console.log('ordering....');


