// let count=0;

// function counting(){
//     //count++;

//     postMessage(count)
//     setTimeout(counting, 1000);
// }

// counting();

onmessage = (e) =>{
    
    let num = e.data;

    postMessage(++num);
    

}