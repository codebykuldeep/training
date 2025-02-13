import React, { useState } from 'react';
import './App.css';
import Data from './components/Data';
import { InfiniteScroll } from './components/InifiniteScroll';

function App() {
  const [btn,setbtn] = useState(true)
  return (
    <div className="App">
      hello
      <button onClick={()=>setbtn(prev=>!prev)}>Switch</button>
      <br />
      <br />
      <br />
      {btn ? <Data/> : <InfiniteScroll/>}
    </div>
  );
}

export default App;
