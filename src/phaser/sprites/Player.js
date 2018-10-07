import Phaser from 'phaser'

export default class Player extends Phaser.GameObjects.Sprite {
  constructor ({ scene, x, y }) {
    super(scene, x, y, 'player')

    // Enable physics for the player
    scene.physics.world.enable(this)

    // Copy paste sprite behaviour from Phaser 3 get started
    this.body.setVelocity(100, 200)
    this.body.setBounce(1, 1)
    this.body.setCollideWorldBounds(true)
  }
}
