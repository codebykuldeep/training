import React from 'react';
import { db } from './firebaseConfig';
import { collection, getDoc, getDocs, query } from 'firebase/firestore';


function Login() {
    const collectionRef = collection(db,'books');

    function handleSubmit(event){
        event.preventDefault();
        console.log('clicked');
        const {email,password} = Object.fromEntries((new FormData(event.target)).entries());
        console.log(email,password);
      
        
    }

    async function handleSingle(){
        //get collection data
        const q = query(collection(db, "books"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        });
    }


     async function handleMultiple(){
        //get collection data
        // const q = query(collection(db, "books"));

        // const querySnapshot = await getDocs(q);
        
        // querySnapshot.forEach((doc) => {
        // // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        // });


        db.collection('books').get()
        .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, '=>', doc.data());
        });
        })
        .catch((error) => {
        console.error('Error getting documents: ', error);
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
        <button onClick={handleSingle}>Single Data</button>
        <button onClick={handleMultiple}>All data</button>
    </div>
  )
}

export default Login