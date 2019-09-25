export class SceneActionsHandler {
    constructor(SceneHandler) {
        this.sceneHandler = SceneHandler;
        this.scene = SceneHandler.current;

        this.setupIcons();
        this.setupPopovers();
    }

    setupIcons() {
        this.icons = document.querySelectorAll('[data-action-icon]');

        this.icons.forEach((icon, iconIndex) => {
            icon.addEventListener('click', this.sceneHandler.next.bind(this.sceneHandler, iconIndex));

            icon.addEventListener('mouseover', this.showPopover.bind(this, iconIndex));

            icon.addEventListener('mouseleave', this.hidePopover.bind(this, iconIndex));

            icon.style.backgroundImage = `url(${this.scene.icons[iconIndex]})`;
        });
    }

    setupPopovers() {
        this.popovers = document.querySelectorAll('[data-action-popover]');
    }

    showPopover(index) {
        const popover = this.popovers[index];

        popover.classList.add('show');
        popover.textContent = this.scene.popoversText[index];
    }

    hidePopover(index) {
        this.popovers[index].classList.remove('show');
    }

    destroy() {
        this.icons.forEach((icon) => {
            icon.removeEventListener('click', this.sceneHandler.next);
            icon.removeEventListener('mouseover', this.showPopover);
            icon.removeEventListener('mouseleave', this.hidePopover);
        });
    }
}
