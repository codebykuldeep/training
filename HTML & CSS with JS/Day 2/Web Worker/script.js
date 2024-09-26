const startBtn =document.querySelector('#start');
const stopBtn =document.querySelector('#stop');
const display = document.querySelector('.display');
const input = document.getElementById('inp')
let w;

console.log(window.Worker);


startBtn.addEventListener('click',()=>{
    console.log(w);
    let text = parseInt(input.value)
    console.log(text);
    
    if(typeof(w) == "undefined"){
        w = new Worker('worker.js');
        w.postMessage(text);
    }
    w.onmessage = function (event) {
        display.innerHTML = event.data
    }
})

stopBtn.addEventListener('click',()=>{
    w.terminate();
    w = undefined;
})