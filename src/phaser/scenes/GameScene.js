import Phaser from 'phaser'
import Player from '../sprites/Player'

export default class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'GameScene', active: false })
  }

  create () {
    // Add player to the scene
    this.add.existing(new Player({
      scene: this,
      x: 400,
      y: 100
    }))
  }
}
