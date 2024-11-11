
import { createContext, useCallback, useReducer } from "react";

const TaskContext = createContext({
    tasks:[],
    setTasks:()=>{},
    addTask:()=>{},
    removeTask:()=>{},
    updateTask:()=>{},
})

function reducer(state,action){
    if(action.type === 'SET_TASKS'){
        return {...state,tasks:action.payload.tasks}
    }
    if(action.type === 'ADD_TASK'){        
        
        const updatedTasks= [...state.tasks];
        updatedTasks.push(action.payload.task);

        return {...state,tasks:updatedTasks};
    }
    if(action.type === 'UPDATE_TASK'){
        
        
        const updateItemIndex = state.tasks.findIndex((task)=> task.id === action.payload.id)
        state.tasks[updateItemIndex].status = action.payload.status;

        const updatedTasks= [...state.tasks];

        return {...state,tasks:updatedTasks}
        
    }
    if(action.type === "REMOVE_TASK"){
        const updatedTasks = state.tasks.filter((task)=>task.id!==action.payload.id);

        return {...state,tasks:updatedTasks};
    }
    return state;
}


export function TaskContextProvider({children}){

    const [state,dispatch] = useReducer(reducer,{tasks:[]});

    const setTasks = useCallback(function setTasks(tasks){

        dispatch({type:"SET_TASKS",payload:{tasks}});
        
    },[dispatch])

    function addTask(task){
        
        dispatch({type:"ADD_TASK",payload:{task}})
        
    }

    function removeTask(id){
        dispatch({type:'REMOVE_TASK',payload:{id}});
    }

    function updateTask(id,status){
        dispatch({type:"UPDATE_TASK",payload:{id,status}})
    }



    const taskCtx = {
        tasks:state.tasks,
        setTasks,
        addTask,
        removeTask,
        updateTask
    }

    return(
        <TaskContext.Provider value={taskCtx}>
        {children}
        </TaskContext.Provider>
    )
}

export default TaskContext;

