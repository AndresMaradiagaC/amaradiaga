import { GOTO_EVENT_TYPE  } from "./constants.js";

import { MenuController } from "./menuController/menuController.js";

export class AppManager {
    constructor() {
        const navbarContainer = document.getElementById('navbarContainer');
        const contentContainer = document.getElementById('contentContainer');
        this.menuController = new MenuController(contentContainer);
        this.currentController = null;
        window.addEventListener('goto', (event) => {
        this.changeScreen(event.detail.eventType);   
        });

    }
    changeScreen(eventType){
        switch (eventType) {
            case GOTO_EVENT_TYPE.LOGIN:
                break;
            case GOTO_EVENT_TYPE.PLAY:
                break;
            case GOTO_EVENT_TYPE.SCORES:
                break;
            case GOTO_EVENT_TYPE.DIFFICULTY:
                break;
            case GOTO_EVENT_TYPE.THEMES:
                break;
            case GOTO_EVENT_TYPE.CREDITS:
                break;
        
            default:
                break;
        }
    }
    
}