import { setup } from "utils/canvas-setup";
import { Sea } from "objects/sea";
import { Grass } from "objects/grass";
import { SceneActionsHandler } from "objects/scene-actions-handler";
import waterClean from "images/water-clean.png";
import factoryCrossOut from "images/factory-line.png";
import wait from "images/wait.png";

import template from './template.html';
import sceneInformationPopup from "../common/scene-information-popup.html";

export const config = () => ({
    init(SceneHandler) {
        const water = setup('water', 1, 0.55);

        const scene = new SceneActionsHandler(SceneHandler);
        new Sea({...water, color: '#729bfb', lighting: 2.6, type: 'river'});
        new Grass();

        return () => scene.destroy();
    },
    informationText: '5 дней. Крокодила не удается поймать. Но его видели в пресных водах Кальмиуса, возле завода Азовсталь. <br>Что делать?',
    icons: [waterClean, factoryCrossOut, wait],
    popoversText: [
        'В такой грязной воде крокодилу не выжить. Нужно срочно очищать воду',
        'Надо срочно остановить «Азовсталь» и прекратить выбросы',
        'Ничего не делать, просто подождать, и крокодил начнет задыхаться и выскочит из воды сам'
    ],
    correctAnswers: [0],
    template: `${template} ${sceneInformationPopup}`,
});
