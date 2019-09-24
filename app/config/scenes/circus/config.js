import { setup } from "utils/canvas-setup";
import { Croco } from "objects/croco";

import template from './template.html';
import { SCENE_START } from "scenes";

export const config = () => ({
    init(SceneHandler) {
        const croco = setup('croco', 1, 0.94);
        new Croco({ ...croco });
    },
    icons: [],
    template,
    // type: SCENE_START,
});
