import { scenes, getInitialSceneIndex, getEndSceneIndex } from "../config/scenes";
import { InformationPopup } from "./scene-information-popup";

export class SceneHandler {
    constructor() {
        this.sceneContainer = document.getElementById('scene');
        this.scenes = scenes.slice();
        this.index = 0;

        this.current = null;
        this.overlay = null;
        this.sceneInformationPopup = new InformationPopup();

        this.setOverlay();
        this.initScene();
    }

    initScene() {
        this.overlay.classList.add('init');

        //TODO: check if can use this.set(getInitialSceneIndex);
        this.index = getInitialSceneIndex();
        this.current = this.scenes[this.index];
        this.handleSceneChange();
    }

    setOverlay() {
        this.overlay = document.querySelector('[data-action-overlay]');
    }

    next(answer) {
        if (typeof answer !== "undefined" && !this.isCorrectAnswer(answer)) {
            this.set(getEndSceneIndex());

            return;
        }

        this.index = ++this.index % this.scenes.length;

        this.set(this.index);
    }

    set(index) {
        this.animateOverlay();

        this.index = index;
        this.current = this.scenes[index];

        this.handleSceneChange(600);
    }

    animateOverlay() {
        this.overlay.classList.add('active');

        setTimeout(() => {
            this.overlay.classList.remove('active');
        }, 1000);
    }

    handleSceneChange(delay = 0) {

        setTimeout(() => {
            this.sceneContainer.innerHTML = this.current.template;
            this.current.init(this);
            this.sceneInformationPopup.show(this.current.informationText);
        }, delay);
    }

    isCorrectAnswer(answer) {
        return this.current.correctAnswers.some(correctAnswer => correctAnswer === answer);
    }
}
