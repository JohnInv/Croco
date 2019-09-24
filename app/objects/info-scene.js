import { getSceneAfterLoseIndex } from "../config/scenes";

export class InfoScene {
  constructor(SceneHandler) {
    this.sceneHandler = SceneHandler;

    this.title = null;
    this.description = null;
    this.buttonTitle = null;

    this.getInfo();
    this.setInfo();
  }

  getInfo() {
    const scene = this.sceneHandler.current;

    this.title = scene.title || '';
    this.description = scene.description || '';
    this.buttonTitle = scene.buttonTitle;
  }

  setInfo() {
    const selectors = [
      '[data-action-scene-info-title]',
      '[data-action-scene-info-description]',
      '[data-action-scene-info-button]'
    ];
    const [title, description, button] = document.querySelectorAll(selectors.join(','));

    title.innerHTML = this.title;
    description.innerHTML = this.description;
    button.textContent = this.buttonTitle;

    button.addEventListener('click', () => {
      const isEnd = Boolean(button.getAttribute('data-action-scene-info-button'));

      isEnd ? this.sceneHandler.set(getSceneAfterLoseIndex()) : this.sceneHandler.next();
    });
  };
}
