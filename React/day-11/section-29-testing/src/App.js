import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import Async from './components/Async';

function App() {
  return (
    <div className="App">
      <Greeting/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <Async/>
    </div>
  );
}

export default App;
