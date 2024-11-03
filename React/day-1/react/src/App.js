import logo from './logo.svg';
import './App.css';



function Header({greet ='hello',name,onSelect}) {
  return(
    <div onClick= {onSelect}>{greet} {name}</div>
  );
}

function App() {
  const wordArray =['Fundamental',"Core",'Useful'];

  function getWord(max) {
    return Math.floor(Math.random()*(max+1))
  }
  function print(){
    console.log('clicked');
  }
  let word = wordArray[getWord(2)];
  return (
    <div className="App">
      <Header name ='CELESTIAL SYSTEM'  onSelect={print} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         {word} Edit <code>src/App.js</code> and save to reload sum of 5 + 6 ={5+6}.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
