const mypromise = new Promise(function(resolve,reject){
    let value=false;
    setTimeout(() => {
        if(value){
            resolve('5 10sec')
        }
        else{
            reject('5 failed')
        }
    }, 10000);
})


const instantpromise = new Promise(function(resolve,reject){
    let value=true;
    if(value){
        resolve('4 noTimeout')
    }
    else{
        reject('4 failed')
    }
})


const twoSecPromise = new Promise(function(resolve,reject){
    let value=true;
    setTimeout(() => {
        if(value){
            resolve('3 2sec')
        }
        else{
            reject('3 2sec')
        }
    }, 2000);
})

//SEQUENCE EXECUTION


console.log('1');

setTimeout(()=>{
    console.log('2');
    
},2000);

twoSecPromise.then((e)=>{
    console.log(e);
}).catch((e)=>console.log(e)
)

instantpromise.then((m)=>{
    console.log(m);
}).catch((e)=>console.log(e)
)

mypromise.then((m)=>{
    console.log(m);
}).catch((e)=>console.log(e)
)


setTimeout(()=>{
    console.log('6');
    
},0);

console.log('7');

setTimeout(()=>{
    console.log('8');
    
},1000);



//OUTPUT
/*


1
7
4 noTimeout
6
8
3 2sec
2
5 failed

*/

//as their is priority for promise over other async events so when a promise with 2 sec and a timeout with 2sec arrived, promise is given priority
//i.e  3 over 2

