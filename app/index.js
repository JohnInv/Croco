import { SceneHandler } from "./objects/scene-handler";

import './styles.scss';
import { FullScreenHandler } from "objects/full-screen-handler";

class App {
    constructor() {
        const sceneHandler = window.scene = new SceneHandler();
        new FullScreenHandler(sceneHandler);

        if (window.innerHeight < 500) {
            window.scrollTo(0,0);
        }
    }
}

window.onload = function() {
    new App();
};
