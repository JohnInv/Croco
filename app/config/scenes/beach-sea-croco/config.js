import { setup } from "utils/canvas-setup";
import { SceneActionsHandler } from "objects/scene-actions-handler";
import { Sea } from "objects/sea";
import { Beach } from "objects/beach";
import { beachCoords } from "const";
import { SeaCrocodile } from "objects/sea-crocodile";

import net from "images/fishnet.png";
import phone from "images/101.png";
import megaphone from "images/hand-with-megaphone-.png";

import { SCENE_AFTER_LOSE } from "scenes";
import sceneInformationPopup from '../common/scene-information-popup.html';
import template from './template.html';

export const config = () => ({
  init(SceneHandler) {
    const water = setup('water', 1, 0.50);
    const beach = setup('beach', 1, 0.25);

    const scene = new SceneActionsHandler(SceneHandler);
    new Sea({...water});
    new Beach({...beach, coords: beachCoords(beach.c.width, beach.c.height)});
    new SeaCrocodile();

    return () => scene.destroy();
  },
  template: `${template} ${sceneInformationPopup}`,
  icons: [net, phone, megaphone],
  popoversText: [
    'Расставить сети',
    'Позвонить спасателям, чтобы они расставили сети',
    'Предупредить отдыхающих об опасности и ждать, пока крокодил выплывет на берег'
  ],
  correctAnswers: [1, 2],
  informationText: 'Крокодил ушел в море. Его периодически видят в разных местах в черте городского пляжа. Но как поймать крокодила?',
  type: SCENE_AFTER_LOSE,
});
