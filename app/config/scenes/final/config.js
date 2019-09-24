import { SCENE_START } from "../../scenes";
import { SceneActionsHandler } from "../../../objects/scene-actions-handler";

import template from './template.html';
import sceneInformationPopup from '../common/scene-information-popup.html';
import crocoInNature from '../../../img/croco-in-nature.png'
import cityHall from '../../../img/city-hall.png'

export const config = () => ({
  init(SceneHandler) {
    new SceneActionsHandler(SceneHandler);
  },
  template: `${template} ${sceneInformationPopup}`,
  popoversText: [
    'Крокодил погибнет в живой природе',
    'Надо выступать с законодательной инициативой и запрещать цирки с животными и передвижные зоопарки.'
  ],
  icons: [crocoInNature, cityHall],
  correctAnswers: [1],
  informationText: 'Годзи спасли и отдали в кочевую выставку экзотических животных. Там он находится за стеклом – не сбежит. <br>Все правильно?',
});