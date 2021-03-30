import React from 'react'
import Game from './components/Game'
import Home from './components/Home'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GameThree from './components/GameThree';
import GameFive from './components/GameFive';


const App = () => {
    return (
        <Router>
            <Switch>
                 <Route path='/tic-tac-toe' exact component={Home} />
                <Route path='/tic-tac-toe/game' component={Game} />
                <Route path='/tic-tac-toe/gameThree' component={GameThree} />
                <Route path='/tic-tac-toe/gameFive' component={GameFive} />


            </Switch>
        </Router>
    )
}

export default App
