import { div } from "../libs/html.js";

export class MenuView {
    constructor(parent) {
        this.parent = parent;
        this.container = div(this.parent, {className: 'menuview'});
    }
}
