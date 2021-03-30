import React from 'react'
import Square from './Square'

const style = {
    border: '4px dotted darkblue',
    borderRadius: '10px',
    width: '300px',
    height: '300px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(4, 1fr) / repeat(4, 1fr) '
};

const Board = ({ highlightWinner, squares, onClick}) => (
    <div style={style}>
        { squares.map((square, i) => (
                <Square font={highlightWinner && highlightWinner.includes(i) } key={i} value={square} onClick={() => onClick(i)}/>
        ))
        }
    </div>
)

export default Board
