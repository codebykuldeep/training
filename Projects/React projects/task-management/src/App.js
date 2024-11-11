import './App.css'
import TaskInput from './components/TaskInput';
import Tasks from './components/Tasks';
import  { TaskContextProvider } from './store/TaskContext';
import Header from './components/Header';



function App() {
  
  return (
    <>
      <TaskContextProvider>
      <Header />
      <TaskInput/>
      <Tasks/>
      </TaskContextProvider>
    </>
    
  );
}

export default App;
