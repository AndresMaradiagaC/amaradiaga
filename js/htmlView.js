import { div } from "./libs/html.js";

export class HTMLView  extends HTMLElement{
    constructor(parent){
        super();
        this.parent = parent;
        this.parent.appendChild(this);

        customElements.define("html-view", HTMLView);
    }
}
