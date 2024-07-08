
import { MenuView } from "./menuView.js";

export class MenuController{
    parent;
    view;
    constructor(parent, view){
        this.parent = parent;
        this.view = new MenuView(this.parent);

    }
}