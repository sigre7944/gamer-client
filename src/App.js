import './App.css'
import { GameView } from './game/components/'
import { BrowserRouter, Route } from 'react-router-dom'
import React from 'react'

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        GAMER AI uhuhuh

        <BrowserRouter>
          <Route path={'/game'} component={GameView}/>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
