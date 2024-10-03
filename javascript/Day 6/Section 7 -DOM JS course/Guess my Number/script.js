'use strict';
const body = document.querySelector('body');
const InputNumber = document.querySelector('.guess');
const RandomNumber = document.querySelector('.number');

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

const messageBox = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
let scoreValue =Number(score.textContent);

function updateDisplay(text){
    messageBox.textContent =text;
    score.textContent = scoreValue ===0 ? 0 :--scoreValue;
}

checkBtn.addEventListener('click',()=>{
    body.style.backgroundColor ='#222';
    RandomNumber.textContent ='?';


    let random =Math.floor(Math.random()*20 + 1);
    let enteredValue =Number(InputNumber.value);
    if(enteredValue <=0 || enteredValue >20){
        messageBox.textContent ='⛔ Enter a valid Number ✋';
    }
    else if(random === enteredValue){
        messageBox.textContent ='Correct 🎉';
        highscore.textContent = Number(highscore.textContent) >= scoreValue ? highscore.textContent :scoreValue;
        RandomNumber.textContent = random;
        body.style.backgroundColor ='#5ac952';
    }
    else if(enteredValue < random){
         updateDisplay('📉 Too low ...');
    }
    else{
        updateDisplay('📈 Too high ...');
    }

    if(scoreValue <= 0){
        updateDisplay('You Lost the Game 👎');
    }
})



againBtn.addEventListener('click',()=>{
    scoreValue =20;

    messageBox.textContent ='Start guessing...';
    score.textContent = scoreValue;
    RandomNumber.textContent ='?';
    body.style.backgroundColor ='#222';
    InputNumber.value='';
})