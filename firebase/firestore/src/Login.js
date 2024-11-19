import React from 'react';
import { app ,database} from './firebaseConfig';
import { addDoc, collection,getDoc } from 'firebase/firestore';


function Login() {
    const collectionRef = collection(database,'users');

    function handleSubmit(event){
        event.preventDefault();
        console.log('clicked');
        const {email,password} = Object.fromEntries((new FormData(event.target)).entries());
        
        addDoc(collectionRef,{
          email:email,
          password:password
        })
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err));
    }
    function handleData(){
      getDoc(collectionRef)
      .then((res)=>{console.log(res.docs.map((item)=>{
        return {...item.data(),id:item.id}
      }))})
      .catch((err)=>console.log(err));
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
        <button onClick={handleData}>Get Data</button>
    </div>
  )
}

export default Login