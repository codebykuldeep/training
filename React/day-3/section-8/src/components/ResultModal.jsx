import React, { forwardRef , useImperativeHandle, useRef } from 'react'
import {createPortal} from 'react-dom'

const ResultModal =forwardRef( function ResultModal ({result,targetTime,timeRemaining,onReset},ref) {
    const dialog = useRef();

    const userLost = timeRemaining <= 0;
    const formatTime = (timeRemaining/1000).toFixed(2)
    const score = Math.round(( timeRemaining/(targetTime*1000))*100);
    
    
    
    useImperativeHandle(ref,()=>{
        return{

            open(){
                
                dialog.current.showModal();
            }
        }
    })
  
    return createPortal(
    <dialog className='result-modal' ref={dialog}>
        <h2>You {userLost ? 'Lost' : 'win'} !</h2>
        {!userLost && <h2>Your Score : {score}</h2>}
        <p>
            The target time was <strong>{targetTime} seconds.</strong>
        </p>
        <p>You stopped the timer with <strong>{formatTime} seconds left</strong></p>
        <form method="dialog" onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>,
    document.getElementById('modal')
  )
})

export default ResultModal;