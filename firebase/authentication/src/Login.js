import React from 'react';
import { app } from './firebaseConfig';
import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider , signInWithPopup } from "firebase/auth";


function Login() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    function handleSubmit(event){
        event.preventDefault();
        console.log('clicked');
        const {email,password} = Object.fromEntries((new FormData(event.target)).entries());
        console.log(email,password);
        


        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
           
           console.log(userCredential);
    
        })
        .catch((error) => {
           console.log(error.message);
            alert(error.message)
        });
        
        
    }


    function handleLogin(){
        signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    console.log(result);
    
  }).catch((error) => {
    // Handle Errors here.
    console.log(error);
    
  });
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id='email' name='email' />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="text" id='password' name='password'/>
            </div>
            <button type='submit'>Submit</button>
        </form>
        <button onClick={handleLogin}>sign in with google</button>
    </div>
  )
}

export default Login