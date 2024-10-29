import React, { useState } from 'react'



export default function Gameboard({onSelectPlayer,board}) {
    // const [gameBoard, setGameBoard] =useState(intialGameBoard);

    // function handleSelectSquare(rowIndex,colIndex , symbol){
    //     setGameBoard((prevGameBoard)=>{
    //         const updatedBoard  = [...prevGameBoard.map(innerArr => [...innerArr])];
    //         updatedBoard[rowIndex][colIndex] =activePlayer;
    //         onSelectPlayer();
    //         return updatedBoard;
    //     })
    // }


    

   
  return (
    <ol id='game-board'>
        {board.map((row,rowIndex)=> <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol,colIndex)=> <li key={colIndex}>
                    <button onClick={()=>onSelectPlayer(rowIndex,colIndex)}
                    disabled={playerSymbol !==null}
                        >{playerSymbol}</button>
                </li>)}
            </ol>
        </li>)}
    </ol>
  )
}
