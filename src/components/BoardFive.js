import React from 'react'
import Square from './Square'

const style = {
    border: '4px dotted darkblue',
    borderRadius: '10px',
    width: '350px',
    height: '350px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(5, 1fr) / repeat(5, 1fr)'
};

const BoardFive = ({ highlightWinner, squares, onClick}) => (
    <div style={style}>
        { squares.map((square, i) => (
                <Square font={highlightWinner && highlightWinner.includes(i) } key={i} value={square} onClick={() => onClick(i)}/>
        ))
        }
    </div>
)

export default BoardFive
