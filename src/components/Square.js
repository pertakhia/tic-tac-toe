import React from 'react'

const Square = ({ font, value, onClick}) => (
    
    <button className={ font ? 'win' : ' btnsquare'}  onClick={onClick}>
        {value}
    </button>
)

export default Square
