import { scenes, getInitialScene } from "../config/scenes";
import { templates } from "../templates/templates";

export class SceneHandler {
    constructor() {
        this.sceneContainer = null;
        this.scenes = scenes.slice();
        this.index = 0;

        this.current = null;
        this.overlay = null;

        this.setOverlay();
        this.initScene();
    }

    initScene() {
        this.overlay.classList.add('init');

        this.current = getInitialScene();
        this.index = this.scenes.indexOf(this.current);
        this.handleScenesTemplates();
    }

    setOverlay() {
        this.overlay = document.querySelector('[data-action-overlay]');
    }

    next() {
        this.index = ++this.index % this.scenes.length;

        this.set(this.index);
    }

    set(index) {
        this.animateOverlay();

        this.index = index;
        this.current = this.scenes[index];

        this.handleScenesTemplates(600);
    }

    animateOverlay() {
        this.overlay.classList.add('active');

        setTimeout(() => {
            this.overlay.classList.remove('active');
        }, 1000);
    }

    handleScenesTemplates(delay = 0) {
        this.sceneContainer = document.getElementById('scene');

        setTimeout(() => {
            this.sceneContainer.innerHTML = templates[this.index];
            this.current.init(this);
        }, delay);
    }
}
