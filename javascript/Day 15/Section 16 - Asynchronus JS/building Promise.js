const promise =new Promise(function(resolve,reject){
   console.log('Result is generating');
   
    setTimeout(()=>{
    if(Math.random()>=0.5){
        resolve('YOU WIN !!!');
    }
    else{
        reject('YOU LOSE !!!');
    }
   },2000);
})


promise
.then(res=> console.log(res))
.catch(err =>  console.error(err))

//promisifying the settimeout
const wait = function(second){
    return new Promise((resolve)=>{
        setTimeout(resolve,second*1000);
    })
}
wait(2).then(()=>{
    console.log('I waited 2 secs');
    return wait(1);
})
.then(()=>{
    console.log('I waited 1 secs');
})


//immediate resolve or reject
Promise.resolve('abc').then(x=>console.log(x));
Promise.reject('Eroor').catch(x=>console.log(x));