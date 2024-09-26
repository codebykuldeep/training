const mypromise = new Promise((resolve, reject) => {
    let data = 'This promise  is  resolved';
    setTimeout(()=>{
        resolve(data);
    },5000)
})

async function getData() {
    console.time('fetch');
    console.log('fetching ....');
    
    
    const data = await mypromise;

    console.log(data);
    

    console.log('Fetching done');
    console.timeEnd('fetch');
    
}

getData();



/*
OUTPUT

fetching ....
This promise  is  resolved
Fetching done
fetch: 5.021s

*/