console.log('Fetching started');

fetch("https://jsonplaceholder.org/posts/1")
.then((data1)=>{
    console.log('fetching  1 done' + data1);
    return fetch("https://jsonplaceholder.org/posts/1");
})
.then((data2)=>{
    console.log('fetching  2 done' + data2);
    return fetch("https://jsonplaceholder.org/posts/1");
})
.then((data3)=>{
    console.log('fetching  3 done' + data3);
    console.log('fetching  completed')
})
.catch((error)=>console.log(error))




/*
here sequence of execution is 

Fetching started
fetching  1 done[object Response]
fetching  2 done[object Response]
fetching  3 done[object Response]
fetching  completed


Here we are using fetching multiple apis one after another using chaining
*/
