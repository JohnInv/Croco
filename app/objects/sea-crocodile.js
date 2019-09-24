import { getRandomNumber } from "utils/randomNumber";

export class SeaCrocodile {
  constructor() {
    this.img = document.querySelector('[data-crocodile-img]');

    this.img.style.left = `0px`;
    this.img.style.top = `0px`;
    this.direction = { left: 1, top: 1 };
    this.speed = { left: 0, top: 0 };
    this.background = { direction: 1, position: 1 };

    window.requestAnimationFrame(this.setAnimation.bind(this));
  }

  setAnimation() {
    let left = parseInt(this.img.style.left);
    let top = parseInt(this.img.style.top);

    window.requestAnimationFrame(this.setAnimation.bind(this));

    this.setVerticalDirection(top);
    this.setHorizontalDirection(left);
    this.setSwimAnimation();

    left = left + this.speed.left * this.direction.left;
    top = top + this.speed.top * this.direction.top;

    this.img.style.left = `${left}px`;
    this.img.style.top = `${top}px`;
  }

  setVerticalDirection(top) {
    this.speed.top = getRandomNumber(1, 3);

    if (top + this.img.clientHeight >= window.innerHeight * 0.3) {
      this.direction.top = -1;

      return;
    }

    if (top <= 0) {
      this.direction.top = 1;
    }
  }

  setHorizontalDirection(left) {
    this.speed.left = getRandomNumber(2, 5);

    if (left + this.img.clientWidth >= window.innerWidth) {
      this.direction.left = -1;
      this.img.classList.add('rotate');

      return;
    }

    if (left < 0) {
      this.direction.left = 1;
      this.img.classList.remove('rotate');
    }
  }

  setSwimAnimation() {
    if (this.background.position >= 100) {
      this.background.direction = -1;
    } else if (this.background.position <= 1) {
      this.background.direction = 1;
    }

    this.background.position += 0.5 * this.background.direction;

    this.img.style.backgroundPosition = `center ${this.background.position}px`;
  }
}
