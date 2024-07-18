import { GOTO_EVENT_TYPE } from "./constants.js";
import { DifficultyController } from "./difficultyController/difficultyController.js";
import { LOCALIZATION } from "./localization.js";
import { MenuController } from "./menuController/menuController.js";
import { ThemesController } from "./themesController/themesController.js";

export class AppManager {
    constructor() {
        const navbarContainer = document.getElementById('navbarContainer');
        this.contentContainer = document.getElementById('contentContainer');
        this.backBtn = document.getElementById('backBtn');
        this.backBtn.innerHTML = '◁';

        this.backBtn.onclick = this.onBackBtn.bind(this);
        this.backBtn.classList.add('hidden');

        this.navbarTitle = document.getElementById('navbarTitle');

        this.menuController = new MenuController(this.contentContainer);
        this.currentController = null;

        window.addEventListener('goto', (event) => {
            this.changeScreen(event.detail.eventType);
        });
    }

    onBackBtn() {
        this.changeScreen(GOTO_EVENT_TYPE.MENU);
    }

    changeScreen(eventType) {
        switch (eventType) {
            case GOTO_EVENT_TYPE.LOGIN:
                this.navbarTitle.innerHTML = 'Login';
                break;
            case GOTO_EVENT_TYPE.PLAY:
                this.navbarTitle.innerHTML = 'Play';
                break;
            case GOTO_EVENT_TYPE.SCORES:
                this.navbarTitle.innerHTML = 'Scores';
                break;
            case GOTO_EVENT_TYPE.DIFFICULTY:
                this.backBtn.classList.remove('hidden');
                this.navbarTitle.innerHTML = LOCALIZATION.difficulty;
                this.currentController = new DifficultyController(this.contentContainer);
                break;
            case GOTO_EVENT_TYPE.THEMES:
                this.backBtn.classList.remove('hidden');
                this.navbarTitle.innerHTML = LOCALIZATION.theme;
                this.currentController = new ThemesController(this.contentContainer);

                break;
            case GOTO_EVENT_TYPE.CREDITS:
                this.navbarTitle.innerHTML = 'Credits';
                break;
            case GOTO_EVENT_TYPE.MENU:
                this.navbarTitle.innerHTML = LOCALIZATION.menu;
                this.backBtn.classList.add('hidden');
                this.currentController.remove();
                this.currentController = null;
                break;
            default:
                break;
        }
    }
}
