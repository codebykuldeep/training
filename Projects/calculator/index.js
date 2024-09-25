const btnlist = document.querySelectorAll('.btn')
const opList = document.querySelectorAll('.op')
const inputbox =document.querySelector('.input-display')
const outputbox =document.querySelector('.output-display')
const clearBtn = document.getElementById('clear')
const ansBtn = document.getElementById('answer')

let inputString="";

let PrevOp = false;
let PrevVal="";
let Operator ="";
let ans ;

clearBtn.addEventListener('click',()=>{
    inputString="";
    inputbox.innerHTML=inputString;
    outputbox.innerHTML=inputString;
    PrevOp=false;
    ans=0;
    PrevVal="";
    Operator="";
})
ansBtn.addEventListener('click',()=>{
    if(!PrevOp){
        evaluteAnswer(parseFloat(PrevVal));
        outputbox.innerHTML=ans;
        
    }
})

btnlist.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        
        PrevOp = false;
        PrevVal+=btn.innerHTML;

        inputString+=btn.innerHTML;
        inputbox.innerHTML=inputString;

        console.log(PrevVal);
        

    })
})

opList.forEach((opr)=>{
    opr.addEventListener('click',()=>{
        if(inputString.length !== 0 && !PrevOp){
            evaluteAnswer(parseFloat(PrevVal));


            PrevOp = true ;
            inputString+=opr.innerHTML;
            inputbox.innerHTML=inputString;
            Operator = opr.innerHTML;
        }
    })
})

function evaluteAnswer(val){
    if(!val)
        return;
    
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
            ans = val;
            break;
    }
    PrevVal="";
}