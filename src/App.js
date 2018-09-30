import './App.css'
import { GameView } from './game/components/'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.renderRoot = this.renderRoot.bind(this)
  }

  renderRoot () {
    return (
      <div>
        <p>
          Nothing here for now, check the <a href={'/game'}>initial game view</a>
        </p>
      </div>
    )
  }

  render () {
    return (
      <div className='App'>
        <BrowserRouter>
          <Switch>
            <Route path={'/'} exact render={this.renderRoot} />
            <Route path={'/game'} component={GameView} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
