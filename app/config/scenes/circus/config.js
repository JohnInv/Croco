import { setup } from "utils/canvas-setup";
import { Croco } from "objects/croco";

import template from './template.html';
import { Circus } from "objects/circus";

export const config = () => ({
    init(SceneHandler) {
        const croco = setup('croco', 1, 0.6);

        const circus = new Circus(SceneHandler);
        const crocodile = new Croco({ ...croco });

        return () => { circus.destroy(); crocodile.destroy() } ;
    },
    icons: [],
    template
});
