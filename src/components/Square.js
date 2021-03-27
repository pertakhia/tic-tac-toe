import React from 'react'

const style = {
    background: 'lightblue',
    border: '2px dotted darkblue',
    fontSize: '25px',
    fontWeight: '500',
    cursor: 'pointer',
    outLine: 'none'
}

const Square = ({ value, onClick}) => (
    <button  className="btnnum" style={style} onClick={onClick}>
        {value}
    </button>
)

export default Square
