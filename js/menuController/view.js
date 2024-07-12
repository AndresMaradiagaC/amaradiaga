import { div } from "../libs/html.js";

export class EPView  extends HTMLElement{
    constructor(parent){
        super()
        this.parent = parent;
        this.container = div(this.parent,  {});

        customElements.define("ep-view", EPView);
    }
}
