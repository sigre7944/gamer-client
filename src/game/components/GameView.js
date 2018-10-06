import * as React from 'react'
import { PhaserGame } from './'

export default class GameView extends React.Component {
  render () {
    return (
      <div>
        <h1>GAME</h1>
        <PhaserGame />
      </div>
    )
  }
}
