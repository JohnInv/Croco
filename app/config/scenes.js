import { config as start } from './scenes/start/config';
import { config as circus } from './scenes/circus/config';
import { config as beachSeaCroco } from './scenes/beach-sea-croco/config';
import { config as beachSeaCrocoV2 } from './scenes/beach-sea-croco-v2/config';
import { config as river } from './scenes/river-v1/config';
import { config as riverV2 } from './scenes/river-v2/config';
import { config as end } from './scenes/end/config';
import { config as final } from './scenes/final/config';
import { config as win } from './scenes/win/config';

export const SCENE_START = 'START';
export const SCENE_END = 'END';
export const SCENE_AFTER_LOSE = 'SCENE_AFTER_LOSE';

export const scenes = [
  start(),
  // circus(),
  beachSeaCroco(),
  beachSeaCrocoV2(),
  river(),
  riverV2(),
  final(),
  win(),
  end()
];

export const getInitialSceneIndex = () => scenes.findIndex(scene => scene.type === SCENE_START);
export const getEndSceneIndex = () => scenes.findIndex(scene => scene.type === SCENE_END);
export const getSceneAfterLoseIndex = () => scenes.findIndex(scene => scene.type === SCENE_AFTER_LOSE);
