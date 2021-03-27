import React, { useState } from 'react'
import { calculateWinner } from '../helpers';
import Board from './Board'
// import mik from '../image/mik.png'

const styles = {
    width: '200px',

    margin: '30px auto',
}

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(false);
    const winner = calculateWinner(board);

    const handlerClick = i => {
        const boardCopy = [...board];
        if(winner || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }
    
    const renderMoves = () => (
        <button className='btn'  onClick={() => setBoard(Array(9).fill(null))}>
            Start Game
        </button>
    )
        
    

    return (
        <>
        <Board squares={board} onClick={handlerClick} />
         <div style={styles}>
             <p>{winner ? 'Winner: ' + winner : 'Next Player  ' +(xIsNext ? 'X' : 'O')}</p>
              {renderMoves()}
         </div>
        </>
    )
}

export default Game
