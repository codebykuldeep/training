import React from 'react'
import { redirect } from 'react-router-dom';



export  function logout() {
    localStorage.clear();
    return redirect('/')
  };