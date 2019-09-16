import { getRandomNumber } from "../utils/randomNumber";

export class Grass {
  constructor() {
    this.container = document.querySelector('[data-grass-container]');

    this.coords = [0];

    this.getRandomWidth = getRandomNumber.bind(this, 40, 200);
    this.draw();
  }

  draw() {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 30; i++) {
      const grass = document.createElement('div');
      const { width, height, left } = this.getRandomGrass();

      grass.className = `grass reeds`;
      grass.style.width = `${width}px`;
      grass.style.height = `${height}px`;
      grass.style.left = `${left}px`;

      fragment.appendChild(grass);
    }

    this.container.appendChild(fragment);
  }

  getRandomGrass() {
    const width = this.getRandomWidth();
    const height = width - (width / 100 * 12);
    const left = this.coords[this.coords.length - 1];

    this.coords.push(left + width/2);

    return { width, height, left };
  }
}
