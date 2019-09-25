import { circusCrocodileRunDelay } from "const";

export class Circus {
  constructor(SceneHandler) {
    this.sceneHandler = SceneHandler;
    this.phone = document.querySelector('[data-phone]');
    this.text = document.querySelector('[data-text]');

    this.phoneShowDelay = circusCrocodileRunDelay + 1500;
    this.phoneHideDelay = this.phoneShowDelay + 2000;

    this.textShowDelay = this.phoneHideDelay;
    this.textHideDelay = this.phoneShowDelay + 1000;
    this.timeouts = [];

    this.setPhoneTimeout();
    this.setTextTimeout();

  }

  setPhoneTimeout() {
    const t1 = setTimeout(() => {
      this.phone.classList.add('active');
    }, this.phoneShowDelay);

    const t2 = setTimeout(() => {
      this.phone.classList.remove('active');
    }, this.phoneHideDelay);

    this.timeouts.push(t1, t2);
  }

  setTextTimeout() {
    const t1 = setTimeout(() => {
      this.text.classList.add('active');
    }, this.textShowDelay);

    const t2 = setTimeout(() => {
      this.text.classList.remove('active');

      const t3 = setTimeout(() => this.sceneHandler.next(), 3000);

      this.timeouts.push(t3);
    }, this.textHideDelay);

    this.timeouts.push(t1, t2);
  }

  destroy() {
      this.timeouts.forEach(timeout => window.clearTimeout(timeout))
  }
}
