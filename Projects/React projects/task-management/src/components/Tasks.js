import React, { useContext, useRef, useState } from "react";
import TaskContext from "../store/TaskContext";
import TaskItem from "./TaskItem";
import Modal from "./Modal";

function Tasks() {
  const [taskStatus, setTaskStatus] = useState("pending");
  const { tasks } = useContext(TaskContext);

  const modal = useRef();

  const getTaskCount =(array,type)=>array.reduce((acc, task) => {
    if (task.status === type) return (acc += 1);

    return acc;
  }, 0);

  const pendingTask = getTaskCount(tasks,"pending");

  const completedTask = getTaskCount(tasks,"completed"); 

  const failedTask = getTaskCount(tasks,"failed");

  function handleTaskStatus(status) {
    setTaskStatus(status);
  }

  function handleModalOpen(){
    modal.current.showModal();
  }

  return (
    <>
      <div className="task-conatiner">
        <div className="task-header">
          <h2>Tasks</h2>
          <button onClick={handleModalOpen}>Summary</button>
        </div>
        <div className="task-box">
          <div className="task-type">
            <div>
              <h4
                onClick={() => handleTaskStatus("pending")}
              >{`Pending Tasks (${pendingTask})`}</h4>
              {taskStatus === "pending" && <div className="underline"></div>}
            </div>
            <div>
              <h4
                onClick={() => handleTaskStatus("completed")}
              >{`Completed Tasks (${completedTask})`}</h4>
              {taskStatus === "completed" && <div className="underline"></div>}
            </div>
            <div>
              <h4
                onClick={() => handleTaskStatus("failed")}
              >{`Failed Tasks (${failedTask})`}</h4>
              {taskStatus === "failed" && <div className="underline"></div>}
            </div>
          </div>
          <div className="task-list">
            <TaskItem taskStatus={taskStatus} />
          </div>
        </div>
      </div>
      <Modal ref={modal}/>
    </>
  );
}

export default Tasks;
