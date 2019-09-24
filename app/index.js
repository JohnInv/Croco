import { SceneHandler } from "./objects/scene-handler";

import './styles.scss';

class App {
    constructor() {
        window.scene = this.scene = new SceneHandler();

        if (window.innerHeight < 500) {
            window.scrollTo(0,0);
        }
    }
}

window.onload = function() {
    new App();
};
