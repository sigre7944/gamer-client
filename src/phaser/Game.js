import Phaser from 'phaser'

import BootScene from './scenes/BootScene'

export default class Game extends Phaser.Game {
  constructor (config) {
    // Some config values come from React component, such as DOM Node, width and height
    config = {
      backgroundColor: 0x333333,
      type: Phaser.AUTO,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 200 }
        }
      },
      ...config
    }

    super(config)

    // Load BootScene
    this.scene.add('BootScene', BootScene, true)
  }
}
