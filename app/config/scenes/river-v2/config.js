import { setup } from "../../../utils/canvas-setup";
import { Sea } from "../../../objects/sea";
import { Grass } from "../../../objects/grass";
import { SceneActionsHandler } from "../../../objects/scene-actions-handler";
import hospital from "images/hospital.png";
import shapito from "images/shapito.png";
import lifeguard from "images/lifeguards.png";

import template from './template.html';
import sceneInformationPopup from "../common/scene-information-popup.html";

export const config = () => ({
    init(SceneHandler) {
        const water = setup('water', 1, 0.55);

        new Sea({...water, color: '#729bfb', lighting: 2.6, type: 'river'});
        new Grass();
        new SceneActionsHandler(SceneHandler);
    },
    informationText: 'К вечеру пятого дня крокодила находят на пирсе. Он не шевелится, но еще дышит. <br>Что делать?',
    icons: [hospital, shapito, lifeguard],
    popoversText: [
        'Срочно передать ветеринарам. Животное переохладилось, в ослабленном состоянии из-за плохого питания',
        'Отдать владельцам – в цирк, они знают, что делать',
        'Отдать спасателям. Это же их задача – спасать'
    ],
    correctAnswers: [0],
    template: `${template} ${sceneInformationPopup}`,
});
