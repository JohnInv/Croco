import { SceneHandler } from "./objects/scene-handler";

import './main.css';

class App {
    constructor() {
        window.scene = this.scene = new SceneHandler();
    }
}

window.onload = function() {
    new App();
};
