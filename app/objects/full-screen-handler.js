export class FullScreenHandler {
    constructor(sceneHandler) {
        this.button = null;
        this.sceneHandler = sceneHandler;

        this.setListener();
    }

    setListener() {
        this.button = document.querySelector('[data-full-screen-button]');

        this.button.addEventListener('click', () => this.enable());
    }

    enable() {
        const fullScreenSelectors = ['fullscreenEnabled', 'webkitFullscreenEnabled', 'mozFullScreenEnabled', 'msFullscreenEnabled'];
        const isFullScreenAvailable = fullScreenSelectors.some((selector) => document[selector]);

        if (isFullScreenAvailable) {
            const iframe = document.getElementById('game');
            const methods = ['requestFullscreen', 'webkitRequestFullscreen', 'mozRequestFullScreen', 'msRequestFullscreen'];

            const availableMethod = methods.find((m) => iframe[m]);

            if (availableMethod) {
                 iframe[availableMethod]();

                setTimeout(() => this.sceneHandler.refresh(), 100);
            }
        }
    }
}
