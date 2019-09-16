import { SceneHandler } from "./objects/scene-handler";

import './styles.scss';

class App {
    constructor() {
        window.scene = this.scene = new SceneHandler();
    }
}

window.onload = function() {
    new App();
};
