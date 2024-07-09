import { MenuController } from "./menuController/menuController.js";

export class AppManager {
    constructor() {
        const navbarContainer = document.getElementById('navbarContainer');
        const contenContainer = document.getElementById('contenContainer');
        this.menuController = new MenuController(contenContainer);
    }
}