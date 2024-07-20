import { DIFFICULTY_TYPE } from "../constants.js";
import { HTMLView } from "../htmlView.js";
import { div, span } from "../libs/html.js";
import { LOCALIZATION } from "../localization.js";


export class PlayView extends HTMLView {
    constructor(parentElement, controller) {
        super(parentElement, controller);
        this.className = 'play-view';
        this.container.className ='play-view-container';

        //let brand = div(this.container, {className: 'play-view-play-brand'});

       // let title = span(this.container, {innerHTML: 'LOADING...', className:'play-view-title'});


        this.show();





    }

}

customElements.define("play-view", PlayView);
