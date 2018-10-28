import Phaser from "phaser";
import Player from "../sprites/Player";
import backgroundTexture from "../assets/space.png";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene", active: false });
  }

  preload() {
    this.load.image("background", backgroundTexture);
  }

  create() {
    this.add.image(200, 200, "background");

    // Add player to the scene
    this.player = new Player({
      scene: this,
      x: 400,
      y: 500
    });
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.cursors.left.isDown) {
      this.player.body.setVelocityX(-200);
    } else if (this.cursors.right.isDown) {
      this.player.body.setVelocityX(200);
    } else {
      this.player.body.setVelocityX(0);
    }
  }
}
