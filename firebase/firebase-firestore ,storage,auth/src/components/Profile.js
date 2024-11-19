import React from 'react'
import { auth } from '../config/firebase';

function Profile() {
    console.log(auth.currentUser);
    
  return (
    <>
    {auth?.currentUser ? (
        <div className='container'>
        <div>Profile Information</div>
        <div>Uid -{auth.currentUser.uid}</div>
        <div>Name -{auth.currentUser.displayName}</div>
        <div>Email -{auth.currentUser.email}</div>
        <div>Number -{auth.currentUser.phoneNumber}</div>
        </div>
    ):<div className='container'>PLEASE SIGN UP</div>}
    </>
  )
}

export default Profile