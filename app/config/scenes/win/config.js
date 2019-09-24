import template from './template.html';
import sceneInformationPopup from "../common/scene-information-popup.html";

export const config = () => ({
  init() {

  },
  informationText: 'Победа!<br>Вы спасли не только Годзи, но и сотни других несчастных, замученных животных в Украине',
  template: `${template} ${sceneInformationPopup}`,
});
