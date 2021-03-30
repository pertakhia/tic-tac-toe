import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home-box'>
            <h1 className='hom-box-h1'>Tic Tac Toe</h1>
            <h2 className='home-box-h1'>Choose the type of game</h2>

            <section className='home-section'>
               <ul>
                     <Link className='home-a' to='/tic-tac-toe/gameThree'>
                    <li>3x3</li>
                     </Link> 
                     <Link className='home-a' to='/tic-tac-toe/game'>
                    <li className='list'>4x4</li>
                     </Link>
                     <Link className='home-a' to='/tic-tac-toe/gameFive'>
                    <li>5x5</li>
                     </Link>
               </ul>
            </section>
        </div>
    )
}

export default Home
