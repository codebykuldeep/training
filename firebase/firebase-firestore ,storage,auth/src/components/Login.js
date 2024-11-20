import React, { useState } from 'react'
import './Login.css'
import { auth,provider } from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        try {
            console.log(email,password);
            
          const data = await createUserWithEmailAndPassword(auth, email, password);
          console.log(data);
          
          
        } catch (err) {
          console.error(err);
        }
      };
    
      const signInWithGoogle = async () => {
        try {
          const data = await signInWithPopup(auth, provider);
          console.log(data);
          
        } catch (err) {
          console.error(err);
        }
      };
    


  return (
   <div className='login-container'>
         <div className="login-form">
        <h2>Login</h2>
        <div action="#">
            <div className="input-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" required  onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="text" id="password" name="password" required onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type="submit" className="btn" onClick={signIn}>Sign Up </button>
            <div className="input-group"></div>
        </div>
        <button className="btn" onClick={signInWithGoogle}>Sign Up with google</button>
    </div>
   </div>
  )
}

export default Login