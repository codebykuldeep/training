import React, { forwardRef, useContext } from 'react';
import { createPortal } from 'react-dom';
import TaskContext from '../store/TaskContext';

const Modal =forwardRef (function Modal(props,ref) {
    const {tasks} =useContext(TaskContext);

    const getTaskCount =(array,type)=>array.reduce((acc, task) => {
        if (task.status === type) return (acc += 1);
    
        return acc;
      }, 0);
    
      const pendingTask = getTaskCount(tasks,"pending");
    
      const completedTask = getTaskCount(tasks,"completed"); 
    
      const failedTask = getTaskCount(tasks,"failed");

      const totalTask =pendingTask + completedTask + failedTask  ;
      let percentage = (completedTask/totalTask)*100;
      if(Number.isNaN(percentage))
        percentage= 0;
    
  return createPortal(
    <dialog ref={ref} className='task-modal'>
        <h1>Tasks Summary</h1>
        <div className='task-summary'>
            <p><span>Pending Tasks</span> <span>{pendingTask}</span></p>
            <p><span>Failed Tasks</span> <span>{failedTask}</span></p>
            <p><span>Completed Tasks</span> <span>{completedTask}</span></p>
            <p><span>Total Tasks</span> <span>{totalTask}</span></p>
            <p></p>
        </div>
        <div>
            <h3>Summary</h3>
            <ul>
                <li>You have completed {Math.round(percentage)}% Tasks Before Due Date</li>
            </ul>
        </div>
        <div className='modal-btn'>
            <button onClick={()=>ref.current.close()}>CLOSE</button>
        </div>
    </dialog>,
    document.getElementById('modal')
  )
});

export default Modal