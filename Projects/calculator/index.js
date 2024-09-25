const btnlist = document.querySelectorAll('.btn')
const opList = document.querySelectorAll('.op')
const inputbox =document.querySelector('.input-display')
const outputbox =document.querySelector('.output-display')
const clearBtn = document.getElementById('clear')
const ansBtn = document.getElementById('answer')

let inputString="";

let PrevOp = false;
let Operator ="";
let ans ;

clearBtn.addEventListener('click',()=>{
    inputString="";
    inputbox.innerHTML=inputString;
    outputbox.innerHTML=inputString;
    PrevOp=false;
    ans=0;
})
ansBtn.addEventListener('click',()=>{
    if(!PrevOp){
        outputbox.innerHTML=ans;
    }
})

btnlist.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        inputString+=btn.innerHTML;
        inputbox.innerHTML=inputString;
        PrevOp = false;

        evaluteAnswer(parseFloat(btn.innerHTML));
    })
})

opList.forEach((opr)=>{
    opr.addEventListener('click',()=>{
        if(inputString.length !== 0 && !PrevOp){
            PrevOp = true ;
            inputString+=opr.innerHTML;
            inputbox.innerHTML=inputString;
            Operator = opr.innerHTML;
        }
    })
})

function evaluteAnswer(val){
    switch (Operator) {
        case '+':
            ans+=val;
            break;
        case '-':
            ans-=val;
            break;
        case '*':
                ans*=val;
                break;
        case '/':
            ans/=val;
            break;
        case '%':
            ans%=val;
            break;
        default:
            ans =val;
            break;
    }
}