
// setTimeout(()=>{console.log('timer done');
// },0)
// Promise.resolve('THIS IS DONE').then(res=>console.log(res))

// ! promise -> timer


// ! next tick -> promise

process.nextTick(()=>{
    console.log('process tick done');
    
})

Promise.resolve('THIS IS DONE').then(res=>console.log(res))


