import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
function Home() {
    const naviagte = useNavigate();

    function handleNavigate(){
        naviagte('/products')
    }
  return (
    <div>
        <h1>Home</h1>
        <p><Link to={'/products'}>Product page</Link></p>
        <p><button onClick={handleNavigate}>Navigate</button></p>
    </div>
    
  )
}

export default Home