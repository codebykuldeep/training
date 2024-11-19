import React, { useCallback, useContext, useEffect } from 'react'
import TaskContext from '../store/TaskContext';

function Header() {
  const {setTasks} =useContext(TaskContext)

  const setDataToContext = useCallback(function (tasks){
    setTasks(tasks)
  },[setTasks])


  useEffect(()=>{
    async function fetchData() {
      const response = await fetch('https://todo-react-f6ae9-default-rtdb.firebaseio.com/todo.json',{
        method:"GET",
      });

      if(!response.ok){
        console.warn('Fetch data failed from Server')
        throw new Error('FETCH FROM FIREBASE FAILED !!!')
      }

      const data = await response.json();

      return data;
      
    }

    

    fetchData()
    .then(data=>{setDataToContext(data)})
    .catch(error=>console.error('FETCH API FAILED',error));

  },[setDataToContext])


  return (
    <>
    <header className="header">
        <h1>TASK MANAGEMENT</h1>
    </header>
    </>
  )
}

export default Header