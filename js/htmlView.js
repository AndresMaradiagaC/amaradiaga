import { div } from "./libs/html.js";

export class HTMLView  extends HTMLElement{
    constructor(parentElement, controller){
        super();
        parentElement.appendChild(this);
        this.controller = controller;


        customElements.define("html-view", HTMLView);
    }
}
