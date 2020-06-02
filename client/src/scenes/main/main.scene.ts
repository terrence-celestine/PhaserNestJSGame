import { Scene } from 'phaser';

export class MainScene extends Scene {
  preload() {
    this.add.image(100, 100, 'plush', './images/profil-sad-plush.png');
  }

  create() {
    this.add.text(100, 100, 'This is a test project');
  }
}