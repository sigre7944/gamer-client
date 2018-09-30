import * as React from 'react/cjs/react.development'
import Phaser, { create } from 'phaser'

export default class GameView extends React.Component {
  constructor (props) {
    super(props)

    this.canvasRef = React.createRef()
  }

  componentDidMount () {
    console.log(this.canvasRef)

    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 200 }
        }
      },
      scene: {
        preload: preload,
        create: create
      },
      // canvas: this.canvasRef.current,
      backgroundColor: 0x333333
    }

    const game = new Phaser.Game(config)

    function preload () {
    }

    function create () {

    }

  }

  render () {

    return (
        <canvas ref={this.canvasRef}/>
    )
  }
}
