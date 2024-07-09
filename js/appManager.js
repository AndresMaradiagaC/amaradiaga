import { MenuController } from "./menuController/menuController.js";

export class AppManager {
    constructor() {
        const navbarContainer = document.getElementById('navbarContainer');
        const contentContainer = document.getElementById('contentContainer');
        this.menuController = new MenuController(contentContainer);
    }
}