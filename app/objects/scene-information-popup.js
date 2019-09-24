export class InformationPopup {
  constructor() {
    this.sceneContainer = document.getElementById('scene');
    this.popup = null;
    this.text = null;
    this.close = null;

    this.hideTimeout = null;
    this.hideDelay = 6000;
  }

  addCloseListener() {
    this.close = document.querySelector('[data-scene-information-popup-close]');

    if (!this.close) {
      return;
    }

    this.close.addEventListener('click', () => this.hide());
  }

  show(text) {
    if (!text) {
      this.hide();

      return;
    }

    clearTimeout(this.hideTimeout);

    this.popup = document.querySelector('[data-scene-information-popup]');
    this.text = document.querySelector('[data-scene-information-popup-text]');

    this.text.innerHTML = text;
    this.popup.classList.add('active');
    this.sceneContainer.classList.add('blur');

    this.addCloseListener();
    this.hideTimeout = setTimeout(() => this.hide(), this.hideDelay);
  }

  hide() {
    if (!this.popup) {
      return;
    }

    this.popup.classList.remove('active');
    this.sceneContainer.classList.remove('blur');
  }
}