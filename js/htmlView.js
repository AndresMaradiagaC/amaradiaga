import { div } from "./libs/html.js";

export class HTMLView  extends HTMLElement{
    constructor(parentElement, controller){
        super();
        parentElement.appendChild(this);
        this.controller = controller;
    }

    show(){
        this.style.left = '0px';
    }

    hide(){
        this.style.left = '100%';

    }
}
customElements.define("html-view", HTMLView);
