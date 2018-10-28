import Phaser from 'phaser'
import playerTexture from '../assets/player.png'
import GameScene from './GameScene'

export default class BootScene extends Phaser.Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload () {
    // Load player texture from data URI provided by Webpack
    this.textures.addBase64('player', playerTexture)
    this.load.image('player')

  }

  create () {
    // Once loaded, switch to GameScene and destroy the BootScene
    this.scene.add('GameScene', GameScene, true)
    this.scene.remove('BootScene')
  }
}
