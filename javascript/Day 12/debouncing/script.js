const withoutDebounce =document.getElementById('without');
const withDebounce =document.getElementById('debounce');
const op1 =document.getElementById('op1');
const op2 =document.getElementById('op2');

let count =0;

function getData(){
    console.log(withoutDebounce.value);
    op1.innerHTML +=`<br>${withoutDebounce.value}`;
}

function getData2(){
    console.log(withDebounce.value);
    op2.innerHTML +=`<br>${withDebounce.value}`;
    
}

const doDebouncing = (fn,delay)=>{
    let timer;
    return function(){
        clearTimeout(timer);
        timer =setTimeout(()=>{
            fn();
        },delay)
    }
}



const debounce = doDebouncing(getData2,300)

