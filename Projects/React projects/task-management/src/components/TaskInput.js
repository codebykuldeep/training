import React, { useContext, } from 'react'
import TaskContext from '../store/TaskContext';
import { generateId, updateDataToServer } from '../util/functions';

export default function TaskInput() {
    const {tasks , addTask} = useContext(TaskContext)
    
    
    

    function handleSubmit(event){
        
        event.preventDefault();
        const form = new FormData(event.target);
        const newTask = Object.fromEntries(form.entries());
        newTask.id = generateId();
        newTask.status = "pending";
       
        addTask(newTask);
        event.target.reset();

        const updatedTasks = [...tasks,newTask];
        updateDataToServer(updatedTasks);
    }
  return (
    <div  className='input-container'>
      <form className='form-control' onSubmit={handleSubmit}>
      <div  className='form-input'>
          <label htmlFor="title">Title</label>
          <input type="text" id='title'name='title' required/>
        </div>
        <div   className='form-input'>
          <label htmlFor="task">Task</label>
          <textarea id='task'name='task' required/>
        </div>
        <div   className='form-input'>
          <label htmlFor="date">Due Date</label>
          <input type="date" name='date' id='date'required/>
        </div>
        <div   className='form-input'>
          <label htmlFor="time">Time</label>
          <input type="time" name='time' id='time' required/>
        </div>
        <div className="form-button">
          <button>Add</button>
          <button type='reset'>Reset</button>
        </div>
      </form>
    </div>
  )
}
