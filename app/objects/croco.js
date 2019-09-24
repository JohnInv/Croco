import crocoImage from 'images/croco.png';
import { circusCrocodileRunDelay } from "const";

export class Croco {
  constructor({c, ctx}) {
    this.c = c;
    this.ctx = ctx;

    this.width = 4096;
    this.height = 1024;

    this.shouldRun = false;
    this.cycleLoop = {
      x: [0, 1, 2, 3, 4, 5, 6, 7],
      y: [0, 1]
    };

    this.frame = {x: 0, y: 0};
    this.frameCount = 0;
    this.spriteWidth = this.width / this.cycleLoop.x.length;
    this.spriteHeight = this.height / this.cycleLoop.y.length;
    this.img = null;

    this.x = this.c.width - this.spriteWidth / 2;
    this.y = 0;
    this.direction = {left: 1, top: 1};
    this.scale = window.innerWidth <= 500 ? 0.35 : 0.5;

    this.setupImage();
  }


  setupImage() {
    this.img = new Image();

    this.img.src = crocoImage;

    this.img.onload = () => {
      this.setupAnimation();
    };
  }

  setupAnimation() {
    this.setRunTimeout();
    window.requestAnimationFrame(this.step.bind(this));
  }

  drawFrame(frameX, frameY, canvasX, canvasY) {
    this.ctx.drawImage(this.img,
      frameX * this.spriteWidth, frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight,
      canvasX, canvasY, this.spriteWidth * this.scale, this.spriteHeight * this.scale);
  }

  step() {
    this.frameCount++;

    if (this.frameCount < 3) {
      window.requestAnimationFrame(this.step.bind(this));

      return;
    }

    this.frameCount = 0;

    this.onStep();

    window.requestAnimationFrame(this.step.bind(this));
  }

  onStep() {
    this.ctx.clearRect(0, 0, this.c.width, this.c.height);

    if (!this.shouldRun) {
      this.moveX();
      this.moveY();
    } else {
      this.runAway();
    }

    this.frame.x++;

    if (this.frame.x >= this.cycleLoop.x.length) {
      this.frame.x = 0;
    }

    this.drawFrame(this.cycleLoop.x[this.frame.x], this.cycleLoop.y[this.frame.y], this.x, this.y);
  }

  moveX() {
    this.x += 15 * this.direction.left;

    if (this.x + this.spriteWidth * this.scale >= this.c.width) {
      this.direction.left = -1;
      this.frame.y = 0;
    }

    if (this.x <= 0) {
      this.frame.y = 1;
      this.direction.left = 1;
    }
  }

  moveY() {
    this.y += 5 * this.direction.top;

    if (this.y + this.spriteHeight * this.scale >= this.c.height) {
      this.direction.top = -1;
    }

    if (this.y <= 0) {
      this.direction.top = 1;
    }
  }

  setRunTimeout() {
    setTimeout(() => {
      this.shouldRun = true;
    }, circusCrocodileRunDelay);
  }

  runAway() {
    const xMiddle = this.c.width / 2 - this.spriteWidth * this.scale / 2;
    const xDirection = xMiddle - this.x > 0 ? 1 : -1;
    const xSpeed = 12;

    if (!(xMiddle <= this.x + xSpeed && xMiddle >= this.x - xSpeed)) {
      this.x += xSpeed * xDirection;
    }

    if (this.y > -this.spriteHeight) {
      this.y -= 5;
    }

    if (this.y < 100) {
      this.scale -= 0.015;
    }
  }

  setScale() {
  }
}
