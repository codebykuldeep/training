import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredPlayer,setEnteredPlayer] = useState(null);
  
  function handleClick(){
    setEnteredPlayer(playerName.current.value)
    playerName.current.value ='';
  }
  return (
    <section id="player">
      <h2>Welcome { enteredPlayer ?? 'unknown entity'}</h2>
      <p>
        <input type="text" ref={playerName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}










// const [enteredPlayer,setEnteredPlayer] = useState(null);
//   const [submitted,setSubmitted] =useState(false);
//   function handleChange(e){
//     setEnteredPlayer(e.target.value)
//   }
//   function handleClick(){
//     setSubmitted(true);
//   }
//   return (
//     <section id="player">
//       <h2>Welcome {submitted ? enteredPlayer : 'unknown entity'}</h2>
//       <p>
//         <input type="text" onChange={handleChange} value={enteredPlayer}/>
//         <button onClick={handleClick}>Set Name</button>
//       </p>
//     </section>
//   );
