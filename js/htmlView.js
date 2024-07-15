import { div } from "./libs/html.js";

export class HTMLView  extends HTMLElement{
    constructor(parentElement, controller){
        super();
        parentElement.appendChild(this);
        this.controller = controller;
        this.fade = div(this, { className: 'fade' });
        this.container = div(this, {});
    }

    show(){
        this.style.left = '0px';
    }

    hide(){
        this.style.left = '100%';

    }

    remove(){
        this.parentElement.removeChild(this);
    }
}
customElements.define("html-view", HTMLView);
