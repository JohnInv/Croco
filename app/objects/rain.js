export class Rain {
  constructor() {
    this.front = null;
    this.back = null;

    this.setElements();
    this.draw();
  }

  setElements() {
    this.front = document.querySelector('[data-rain-front]');
    this.back = document.querySelector('[data-rain-back]');
  }

  draw () {
      let  increment = 0;
      let drops = "";
      let backDrops = "";

      while (increment < 100) {
        //couple random numbers to use for various randomizations
        //random number between 98 and 1
        const randomHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
        //random number between 5 and 2
        const randomFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
        //increment
        increment += randomFiver;
        //add in a new raindrop with various randomizations to certain CSS properties
        drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randomFiver + randomFiver - 1 + 100) + '%; animation-delay: 0.' + randomHundo + 's; animation-duration: 0.5' + randomHundo + 's;"><div class="stem" style="animation-delay: 0.' + randomHundo + 's; animation-duration: 0.5' + randomHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randomHundo + 's; animation-duration: 0.5' + randomHundo + 's;"></div></div>';
        backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randomFiver + randomFiver - 1 + 100) + '%; animation-delay: 0.' + randomHundo + 's; animation-duration: 0.5' + randomHundo + 's;"><div class="stem" style="animation-delay: 0.' + randomHundo + 's; animation-duration: 0.5' + randomHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randomHundo + 's; animation-duration: 0.5' + randomHundo + 's;"></div></div>';
      }

      this.front.innerHTML = drops;
      this.back.innerHTML = backDrops;
  }
}