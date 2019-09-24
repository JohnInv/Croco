import { InfoScene } from "objects/info-scene";
import { SCENE_END } from "scenes";

import template from './template.html';

export const config = () => ({
    init(SceneHandler) {
        new InfoScene(SceneHandler);
    },
    icons: [],
    type: SCENE_END,
    title: 'Вы не спасли крокодила',
    buttonTitle: 'Попробовать еще раз',
    template
});
