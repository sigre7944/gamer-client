import * as React from 'react'
import Game from '../../phaser/Game'

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

    this.game = new Game({
      width,
      height,
      parent: this.containerRef.current
    })
  }

  render () {
    return (
      <div ref={this.containerRef} />
    )
  }
}
