const btnlist = document.querySelectorAll('.btn')
const opList = document.querySelectorAll('.op')
const inputbox =document.querySelector('.input-display')
const outputbox =document.querySelector('.output-display')
const clearBtn = document.getElementById('clear')
const ansBtn = document.getElementById('answer')

let inputString="";

clearBtn.addEventListener('click',()=>{
    inputString="";
    inputbox.innerHTML=inputString;
    outputbox.innerHTML=inputString;
})
ansBtn.addEventListener('click',()=>{
    outputbox.innerHTML=inputString;
})

btnlist.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        inputString+=btn.innerHTML;
        inputbox.innerHTML=inputString;
    })
})

opList.forEach((opr)=>{
    opr.addEventListener('click',()=>{
        if(inputString.length !== 0){
            inputString+=opr.innerHTML;
            inputbox.innerHTML=inputString;
        }
    })
})

