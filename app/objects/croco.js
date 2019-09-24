import crocoImage from 'images/croco.png';

export class Croco {
  constructor({c, ctx}) {
    this.c = c;
    this.ctx = ctx;

    this.width = 4096;
    this.height = 512;

    this.cycleLoop = [0, 1, 2, 3, 4, 5, 6, 7];
    this.frameIndex = 0;
    this.frameCount = 0;
    this.spriteWidth = this.width / this.cycleLoop.length;
    this.angle = 0;
    this.img = null;

    this.x = 0;
    this.y = 0;
    this.yOffset = 400;
    this.cx = 1;
    this.cy = 1;

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
    window.requestAnimationFrame(this.step.bind(this));
  }

  drawFrame(frameX, frameY, canvasX, canvasY) {
    const scale = 0.5;

    this.ctx.drawImage(this.img,
      frameX * this.spriteWidth, frameY, this.spriteWidth, this.height,
      canvasX, canvasY, this.spriteWidth * scale, this.height * scale);
  }

  step() {
    this.frameCount++;

    if (this.frameCount < 4) {
      window.requestAnimationFrame(this.step.bind(this));

      return;
    }

    this.frameCount = 0;

    this.ctx.clearRect(0, 0, this.c.width, this.c.height);

    const radius = 100;
    this.angle += Math.acos(1 - Math.pow(10 / radius, 2) / 2);

    this.x = 220 + this.cx + radius * Math.cos(this.angle);
    this.y = this.yOffset + this.cy + radius * Math.sin(this.angle);

    this.drawFrame(this.cycleLoop[this.frameIndex], 0, this.x, this.y);

    this.frameIndex++;

    if (this.frameIndex >= this.cycleLoop.length) {
      this.frameIndex = 0;
    }

    window.requestAnimationFrame(this.step.bind(this));
  }
}
