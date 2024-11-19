import React from 'react'
import { useState } from 'react'

function Greeting() {
    const [changedText,setChanged]  = useState(false);
  return (
    <div>
        <h1>Hello World!</h1>
        {!changedText && <p>It's good to see you !</p>}
        {changedText && <p>Text Changed</p>}
        <button onClick={()=>setChanged(prev=>!prev)}>Click</button>
    </div>
  )
}

export default Greeting