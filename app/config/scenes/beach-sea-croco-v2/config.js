import { setup } from "../../../utils/canvas-setup";
import { SceneActionsHandler } from "../../../objects/scene-actions-handler";
import { Sea } from "../../../objects/sea";
import { Beach } from "../../../objects/beach";
import { beachCoords } from "../../constants";
import { Rain } from "../../../objects/rain";
import meat from "images/meat.jpg";
import phone2 from "images/101-2.png";
import megaphone from "images/hand-with-megaphone-.png";

import template from './template.html';
import sceneInformationPopup from "../common/scene-information-popup.html";

export const config = () => ({
    init(SceneHandler) {
        const water = setup('water', 1, 0.4);
        const beach = setup('beach', 1, 0.7);

        new SceneActionsHandler(SceneHandler);
        new Sea({...water, color: '#006994', lighting: 2.6});
        new Beach({...beach, coords: beachCoords(beach.c.width, beach.c.height)});
        new Rain();
    },
    template: `${template} ${sceneInformationPopup}`,
    icons: [meat, phone2, megaphone],
    popoversText: [
        'Разложить еду на берегу и расставить рядом капканы',
        'Установить сигнальные гудки, чтобы вовремя оповещать спасателей',
        'Наладить координацию между спасателями, водолазной службой, ветеринарной службой. Ведь крокодил не ел два дня. Организовать круглосуточные посты наблюдения'
    ],
    informationText: 'Двое суток проходит, крокодила нет. <br>Его видят в разных местах на пляже, но поймать не удается. Спасатели не поспевают прибыть на место. <br>Что делать?',
    correctAnswers: [2],
});
