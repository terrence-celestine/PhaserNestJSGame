import 'phaser';
import { MainScene } from './scenes/main/main.scene';

const gameConfig = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  scene: MainScene
};

new Phaser.Game(gameConfig);