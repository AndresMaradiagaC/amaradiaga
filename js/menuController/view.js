import { div } from "../libs/html.js";

export class EPView  extends HTMLElement{
    constructor(parentElement){
        super()
        this.parent = parentElement;
        this.container = div(this.parent,  {});

        customElements.define("ep-view", EPView);
    }
}
