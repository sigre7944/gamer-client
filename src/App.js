import './App.css'
import { GameView } from './game/components/'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'
import { bindActionCreators } from 'redux'
import { happinessActions } from './core/action-creators'
import { connect } from 'react-redux'
import { Button, Grid, Table } from 'react-bootstrap'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.renderRoot = this.renderRoot.bind(this)
    this.handleCreateHappinessButtonClick = this.handleCreateHappinessButtonClick.bind(this)
  }

  componentDidMount () {
    const { happiness } = this.props.actions

    happiness.fetchHappinesses()
  }

  handleCreateHappinessButtonClick () {
    const { happiness } = this.props.actions

    happiness.createHappiness({ level: Math.floor(100 * Math.random()) })
  }

  renderRoot () {

    const { happinesses } = this.props

    const tableItems = happinesses.map(({ id, level }) => (
      <tr>
        <td>{id}</td>
        <td>{level}</td>
      </tr>
    ))

    return (
      <div>
        <p>
          Nothing here for now, check the <a href={'/game'}>initial game view</a>
        </p>

        <Button
          bsStyle={'danger'}
          onClick={this.handleCreateHappinessButtonClick}
        >
          CREATE HAPPINESS
        </Button>

        <hr/>

        <Grid>
          <Table striped bordered condensed hover>
            <thead>
            <tr>
              <th>id</th>
              <th>level</th>
            </tr>
            </thead>
            <tbody>
            {tableItems}
            </tbody>
          </Table>
        </Grid>
      </div>
    )
  }

  render () {
    return (
      <div className='App'>
        <BrowserRouter>
          <Switch>
            <Route path={'/'} exact render={this.renderRoot}/>
            <Route path={'/game'} component={GameView}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    happinesses: state.core.happiness.happinesses
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: {
      happiness: bindActionCreators({
        ...happinessActions
      }, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
