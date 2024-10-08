const red =document.querySelector('.red');
const blue =document.querySelector('.blue');
const green =document.querySelector('.green');
const  result=document.querySelector('.result-bubble');

red.addEventListener('click',()=>{
    console.log('Clicked on red');
    result.innerHTML = result.innerHTML +'<br>Clicked on red'
})

blue.addEventListener('click',()=>{
    console.log('Clicked on blue');
    result.innerHTML = result.innerHTML +'<br>Clicked on blue'
})

green.addEventListener('click',()=>{
    console.log('Clicked on green');
    result.innerHTML = result.innerHTML +'<br>Clicked on green'
})


//capturing

const red2 =document.querySelector('.red2');
const blue2 =document.querySelector('.blue2');
const green2 =document.querySelector('.green2');
const  result2=document.querySelector('.result-capture');

red2.addEventListener('click',()=>{
    console.log('Clicked on red');
    result2.innerHTML = result2.innerHTML +'<br>Clicked on red'
},true)

blue2.addEventListener('click',()=>{
    console.log('Clicked on blue');
    result2.innerHTML = result2.innerHTML +'<br>Clicked on blue'
},true)

green2.addEventListener('click',()=>{
    console.log('Clicked on green');
    result2.innerHTML = result2.innerHTML +'<br>Clicked on green'
})


//stop propagation

const red3 =document.querySelector('.red3');
const blue3 =document.querySelector('.blue3');
const green3 =document.querySelector('.green3');
const  result3=document.querySelector('.result-stop');

red3.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log('Clicked on red');

    result3.innerHTML = result3.innerHTML +'<br>Clicked on red'


    
},true)

blue3.addEventListener('click',()=>{
    console.log('Clicked on blue');
    result3.innerHTML = result3.innerHTML +'<br>Clicked on blue'
},true)

green3.addEventListener('click',()=>{
    console.log('Clicked on green');
    result3.innerHTML = result3.innerHTML +'<br>Clicked on green'
})