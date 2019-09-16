import { Sea } from "../objects/sea";
import { Beach } from "../objects/beach";
import { beachCoords } from "./constants";
import { setup } from "../utils/canvas-setup";
import { SceneActionsHandler } from "../objects/scene-actions-handler";
import { InfoScene } from "../objects/info-scene";
import { Rain } from "../objects/rain";

import megaphone from '../../app/img/hand-with-megaphone-.png';
import phone from '../../app/img/101.png';
import net from '../../app/img/fishnet.png';
import meat from '../../app/img/meat.jpg';
import phone2 from '../../app/img/101-2.png';

const SCENE_START = 'START';
const SCENE_END = 'END';

export const scenes = [
  {
    init(SceneHandler) {
      new InfoScene(SceneHandler);
    },
    title: 'Спаси крокодила',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cumque deleniti doloribus dolorum ducimus eius facere, fugit libero saepe ullam!\n',
    buttonTitle: 'Начать',
    type: SCENE_START,
  },
  {
    init(SceneHandler) {
      setTimeout(() => {
        SceneHandler.next();
      }, 1500);
    },
    icons: [],
  },
  {
    init(SceneHandler) {
      const water = setup('water', 1, 0.4);
      const beach = setup('beach', 1, 0.25);

      new SceneActionsHandler(SceneHandler);
      new Sea({...water});
      new Beach({...beach, coords: beachCoords(beach.c.width, beach.c.height)});
    },
    icons: [net, phone, megaphone],
    popoversText: [
      'Cети',
      'Позвонить спасателям, чтобы они расставили сети',
      'Предупредить отдыхающих об опасности и ждать, пока крокодил выплывет на берег'
    ],
  },
  {
    init(SceneHandler) {
      const water = setup('water', 1, 0.4);
      const beach = setup('beach', 1, 0.7);

      new SceneActionsHandler(SceneHandler);
      new Sea({...water, color: '#006994', lighting: 2.6});
      new Beach({...beach, coords: beachCoords(beach.c.width, beach.c.height)});
      new Rain();
    },
    icons: [meat, phone2, megaphone],
    popoversText: [
      'Разложить еду на берегу и расставить рядом капканы',
      'Установить сигнальные гудки, чтобы вовремя оповещать спасателей',
      'Наладить координацию между спасателями, водолазной службой, ветеринарной службой. Ведь крокодил не ел два дня. Организовать круглосуточные посты наблюдения'
    ],
  },
  {
    init(SceneHandler) {
      new InfoScene(SceneHandler);
    },
    icons: [],
    type: SCENE_END,
    title: 'Конец заголовок',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cumque deleniti doloribus dolorum ducimus eius facere, fugit libero saepe ullam!\n',
    buttonTitle: 'Попробовать еще раз'
  },
  // {
  //   init() {
  //   },
  //   icons: []
  // },
  // {
  //   init() {
  //   },
  //   icons: [],
  // },
  // {
  //   init() {
  //   },
  //   type: SCENE_END
  // }
];

export const getInitialScene = () => scenes.find(scene => scene.type === SCENE_START);
export const getEndScene = () => scenes.find(scene => scene.type === SCENE_END);
