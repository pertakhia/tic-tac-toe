import React from 'react'
import Square from './Square'

const style = {
    border: '4px dotted darkblue',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

const BoardThree = ({ highlightWinner, squares, onClick}) => (
    <div style={style}>
        { squares.map((square, i) => (
                <Square font={highlightWinner && highlightWinner.includes(i) } key={i} value={square} onClick={() => onClick(i)}/>
        ))
        }
    </div>
)

export default BoardThree
