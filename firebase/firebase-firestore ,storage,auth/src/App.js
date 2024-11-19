import {  useState } from 'react';
import './App.css';
import Login from './components/Login';
import { auth } from './config/firebase';
import {  signOut } from 'firebase/auth';
import Movies from './components/Movies';
import Profile from './components/Profile';
function App() {
  const [switchPage,setSwitchPage] = useState(1);
  
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <div className='header'>
        <div onClick={()=>setSwitchPage(1)}>Sign Up</div>
        <div onClick={()=>setSwitchPage(2)}>Profile</div>
        <div onClick={()=>setSwitchPage(3)}>Add movies</div>
        <div onClick={logout}>Logout</div>
      </div>
     {switchPage === 1 ? <Login /> : <></>}
     {switchPage === 2 ? (<Profile/>) : <></>}
     {switchPage === 3 ? <Movies/> : <></>}
    </div>
  );
}

export default App;
