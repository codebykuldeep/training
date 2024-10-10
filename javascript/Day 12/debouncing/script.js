const withoutDebounce =document.getElementById('without');
const withDebounce =document.getElementById('debounce');


let count =0;

function getData(){
    console.log(withoutDebounce.value);
    
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



const debounce = doDebouncing(getData,300)

