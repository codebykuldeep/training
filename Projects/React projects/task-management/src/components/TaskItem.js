import React, { useContext } from "react";
import TaskContext from "../store/TaskContext";
import { updateDataToServer } from "../util/functions";

function TaskItem({taskStatus}) {
  const { tasks,updateTask,removeTask } = useContext(TaskContext);
  

  const taskList = tasks.filter((task)=>task.status === taskStatus);


  function handleTaskStatus(id,status){
    updateTask(id,status);

    
    const updatedTasks= [...tasks];
    const updateItemIndex = updatedTasks.findIndex((task)=> task.id === id)
    updatedTasks[updateItemIndex].status = status;
    updateDataToServer(updatedTasks);
        
  }

  function handleDeleteTask(id){
    removeTask(id)
    const updatedTasks = tasks.filter((task)=>task.id!==id);
    updateDataToServer(updatedTasks);
  }
  
  return (
    <>
      {taskList.length !== 0 ? (
        <ul>
          {taskList.map((task,index)=>(
            <li key={task.id}>
            <div className="task">
              <h4>{index+1}. {task.title}</h4>
              <p>
                <span><strong>Due date</strong> - {task.date}</span>{"     "}
                <span><strong>Due Time</strong> - {task.time}</span>
              </p>
              <p>
                {task.task}
              </p>
              <div className="task-btn">
                <span onClick={()=>handleTaskStatus(task.id,'failed')}>Mark as failed</span> <span onClick={()=>handleTaskStatus(task.id,'completed')}>Mark as Completed</span> 
                <span onClick={()=>handleDeleteTask(task.id)}> Delete</span>
              </div>
            </div>
          </li>
          ))}
          
        </ul>
      ) : (
        <div className="task-msg">Currently you have no {taskStatus} tasks.</div>
      )}
      
    </>
  );
}

export default TaskItem;
