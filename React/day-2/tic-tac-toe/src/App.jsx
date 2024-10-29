import Player from "./components/Player";
import Gameboard from "./components/Gameboard";
import Log from "./components/Log";
import {WINNING_COMBINATIONS} from "./components/winning-comb";
import { useState } from "react";
import GameOver from "./GameOver";

const intialGameBoard =[
  [null,null,null],
  [null,null,null],
  [null,null,null]
]


function App() {
  const [activePlayer ,setActivePlayer] = useState('X');
  const [gameTurns,setGameTurns] = useState([]);
 
  let winner;

let  gameBoard =[...intialGameBoard.map(arr=>[...arr])];
    for(const turn of gameTurns){
        const {square,player} =turn;
        const {row,col} = square;
        gameBoard[row][col]= player;
    }

    for(const combination of WINNING_COMBINATIONS){
      

      const firstSquareSymbol= gameBoard[combination[0].row][combination[0].column];
      const secondSquareSymbol=gameBoard[combination[1].row][combination[1].column]
      const thirdSquareSymbol=gameBoard[combination[2].row][combination[2].column];
      

      if(firstSquareSymbol && 
        firstSquareSymbol === secondSquareSymbol &&
        firstSquareSymbol === thirdSquareSymbol
      ){
        winner =firstSquareSymbol;
      }
    }

    let hasDraw = gameTurns.length === 9 && !winner;
  


  function handlePlayer(rowIndex,colIndex){
    setActivePlayer((currentPlayer)=> currentPlayer === "X" ? 'O' : "X")
    setGameTurns(prevTurns =>{
      let currentPlayer ='X';

      if(prevTurns.length>0 && prevTurns[0].player === 'X'){
        currentPlayer ='O';
      }
      const updatedTurns = [{
        square:{row:rowIndex,col:colIndex},
        player:currentPlayer
      },...prevTurns];
      return updatedTurns;
    })
  }

  function handleRestart(){
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name='Player 1' symbol='X' isActive ={activePlayer === 'X'}/>
          <Player name='Player 2' symbol='O' isActive ={activePlayer === 'O'}/>
        </ol>
        {/* <GameBoard onSelectPlayer={handlePlayer} activePlayer={activePlayer}></GameBoard> */}
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
        <Gameboard board={gameBoard} onSelectPlayer={handlePlayer}></Gameboard>
      </div>
      <Log turns={gameTurns}></Log>
    </main>
  )
}

export default App
