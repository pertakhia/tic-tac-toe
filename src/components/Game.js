import React, { useState } from 'react'
import { calculateWinner } from '../helpers';
import Board from './Board'
// import mik from '../image/mik.png'



const Game = ({history}) => {

    const [board, setBoard] = useState(Array(16).fill(null));
    const [xIsNext, setXisNext] = useState(false);
    const winnerInfo = calculateWinner(board);
    const winner = winnerInfo.winner;
    const draw = winnerInfo.isDraw;
    const winnerHighlight = winnerInfo.line;

    const handlerClick = i => {
        const boardCopy = [...board];
        if(winner || boardCopy[i]) return ;
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
       
    }

    const choose= () => {
        history.push('/tic-tac-toe')
    }
    
    const renderMoves = () => (
        <button className='btn'  onClick={() => choose() }>
            Try Again
        </button>
    )
        
    

    return (
        <>
         <div className='center' >
             <p className={ winner ? 'win' : draw ? 'draw' : ''}>{ winner ? 'Winner:  ' + winner  : draw  ? 'It is a Draw' : 'Next Player  ' + (xIsNext ? 'X' : 'O')  }</p>
         </div>
         <Board highlightWinner={winnerHighlight} squares={board} onClick={handlerClick} />
         <div className='center'>
             {renderMoves()}
         </div>
        </>
    )
}

export default Game
