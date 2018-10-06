import * as React from 'react'
import Phaser from 'phaser'
import gamerFaceTexture from '../../phaser-assets/gamer-face.png'

export default class PhaserGame extends React.Component {
  constructor (props) {
    super(props)

    this.containerRef = React.createRef()
  }

  static defaultProps = {
    width: 800,
    height: 600
  }

  componentDidMount () {
    const { width, height } = this.props

    const config = {
      type: Phaser.AUTO,
      width,
      height,
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
      parent: this.containerRef.current,
      backgroundColor: 0x333333
    }

    this.game = new Phaser.Game(config)

    function preload () {
      this.textures.addBase64('gamerFace', gamerFaceTexture)
      this.load.image('gamerFace')
    }

    function create () {
      const logo = this.physics.add.image(400, 100, 'gamerFace')

      logo.setVelocity(100, 200)
      logo.setBounce(1, 1)
      logo.setCollideWorldBounds(true)
    }
  }

  render () {
    return (
      <div ref={this.containerRef} />
    )
  }
}
