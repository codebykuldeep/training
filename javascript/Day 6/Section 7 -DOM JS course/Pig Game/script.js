'use strict';

const firstPlayerScore = document.querySelector('#score--0');
const secondPlayerScore = document.querySelector('#score--1');


const firstCurrentScore = document.querySelector('#current--0');
const secondCurrentScore = document.querySelector('#current--1');


const playerOne = document.querySelector('.player--0');
const playerTwo = document.querySelector('.player--1');

const dice =document.querySelector('.dice');

const newGameBtn =document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

//starting condition
firstPlayerScore.textContent =0;
secondPlayerScore.textContent =0;
dice.classList.add('hidden');
let activePlayer = 0;
let score = 0;

function addToCurrentScore(score){
    const currentScoreView = document.querySelector(`#current--${activePlayer}`);
    currentScoreView.textContent = score + Number(currentScoreView.textContent);
}

function addToPlayerScore(){
    document.querySelector(`#score--${activePlayer}`).textContent = Number(document.querySelector(`#current--${activePlayer}`).textContent) + Number(document.querySelector(`#score--${activePlayer}`).textContent);
    document.querySelector(`#current--${activePlayer}`).textContent = 0;

    if(Number(document.querySelector(`#score--${activePlayer}`).textContent) >= 100){
        return true;
    }
    return false;
}



rollDiceBtn.addEventListener('click',()=>{
    let random = Math.trunc(Math.random()*6 +1);
    dice.src=`dice-${random}.png`;
    dice.classList.remove('hidden');

    //check for rolled 1
    if(random !== 1){
        //add to score
        score+=random;
        addToCurrentScore(random);
    }
    else{
        //switch player
        score=0;
        activePlayer = activePlayer ===0 ? 1 : 0;
        playerOne.classList.toggle('player--active');
        playerTwo.classList.toggle('player--active');
    
    }
})

holdBtn.addEventListener('click',()=>{
    let ans = addToPlayerScore();

    if(!ans){
        activePlayer = activePlayer ===0 ? 1 : 0;
    }
    else{
        alert(`Player ${activePlayer + 1} wins`);
    }
    

})

newGameBtn.addEventListener('click',()=>{
    activePlayer =0;
    score =0;
    firstCurrentScore.textContent =0;
    firstPlayerScore.textContent = 0;

    secondPlayerScore.textContent = 0;
    secondCurrentScore.textContent = 0;
    playerOne.classList.remove('player--active');
    playerTwo.classList.remove('player--active');


    playerOne.classList.add('player--active');
})


