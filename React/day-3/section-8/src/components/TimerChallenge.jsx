import React, { useRef, useState } from 'react'
import ResultModal from './ResultModal';

function TimerChallenge({title,targetTime}) {
    // const [timerStarted,setTimerStarted] =useState(false);
    // const [timerExpired,setTimerExpired] =useState(false);
    const [timeRemaining ,setTimeRemaining] = useState(targetTime*1000);
    const timer = useRef();
    const dialog =useRef();

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
    
    

    if(timeRemaining <= 0){
        clearInterval(timer.current);
        dialog.current.open();
    }
    function handleReset(){
        setTimeRemaining(targetTime*1000);
    }
function handleStart(){
    // timer.current = setTimeout(()=>{
    //     setTimerExpired(true);
    //     dialog.current.open();
    // },targetTime*1000);
    timer.current = setInterval(() => {
        setTimeRemaining(prevTimeRemaining => prevTimeRemaining -10)
        
    }, 10);

}
function handleStop(){
    clearInterval(timer.current);
    dialog.current.open();
}
  return (
    <>
    {<ResultModal ref={dialog} targetTime={targetTime} result={'lost'} timeRemaining={timeRemaining} onReset={handleReset}/>}
    <section className='challenge'>
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
            <button onClick={timerIsActive ? handleStop : handleStart}>
                {timerIsActive ?"Stop": 'Start'} Challenge
            </button>
        </p>
        <p className={timerIsActive ?"active": ''}>
        {timerIsActive ?"Time is running...": 'Timer inactive'}
        </p>
    </section>
    </>
  )
}

export default TimerChallenge