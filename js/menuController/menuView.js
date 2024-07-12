import { HTMLView } from "../htmlView.js";

export class MenuView extends HTMLView {
    constructor(parent) {
        super(parent);
        this.className = 'menu-view';
        console.dir(this);
    }
}

customElements.define("menu-view", MenuView);
