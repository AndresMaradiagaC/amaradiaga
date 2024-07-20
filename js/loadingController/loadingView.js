import { DIFFICULTY_TYPE } from "../constants.js";
import { HTMLView } from "../htmlView.js";
import { div, span } from "../libs/html.js";
import { LOCALIZATION } from "../localization.js";


export class LoadingView extends HTMLView {
    constructor(parentElement, controller) {
        super(parentElement, controller);
        this.className = 'loading-view';
        this.container.className ='loading-view-container';

        let brand = div(this.container, {className: 'loading-view-loading-brand'});

        let title = span(this.container, {innerHTML: 'LOADING...', className:'loading-view-title'});


        this.show();





    }

}

customElements.define("loading-view", LoadingView);
