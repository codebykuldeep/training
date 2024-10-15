console.log('test Start');
setTimeout(()=>{
    console.log('0 sec timer ');
    
},0);

Promise.resolve('Promise resolved 1').then(res => console.log(res))


Promise.resolve('Promise resolved 2').then(res => {
    for(let x=1;x<100000;x++){}
    console.log(res);
    
})

console.log('test end');


/*
test Start
test end
Promise resolved 1
Promise resolved 2
0 sec timer 

*/