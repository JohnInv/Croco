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

    this.setPhoneTimeout();
    this.setTextTimeout();
  }

  setPhoneTimeout() {
    setTimeout(() => {
      this.phone.classList.add('active');
    }, this.phoneShowDelay);

    setTimeout(() => {
      this.phone.classList.remove('active');
    }, this.phoneHideDelay);
  }

  setTextTimeout() {
    setTimeout(() => {
      this.text.classList.add('active');
    }, this.textShowDelay);

    setTimeout(() => {
      this.text.classList.remove('active');

      setTimeout(() => this.sceneHandler.next(), 3000);
    }, this.textHideDelay);
  }
}