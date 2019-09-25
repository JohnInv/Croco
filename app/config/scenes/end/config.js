import { InfoScene } from "objects/info-scene";
import { SCENE_END } from "scenes";

import template from './template.html';

export const config = () => ({
    init(SceneHandler) {
        const infoScene = new InfoScene(SceneHandler);

        return () => infoScene.destroy();
    },
    icons: [],
    type: SCENE_END,
    title: 'Вы не спасли крокодила',
    buttonTitle: 'Попробовать еще раз',
    template
});
