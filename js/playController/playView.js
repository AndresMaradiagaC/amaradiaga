import { DIFFICULTY_TYPE } from "../constants.js";
import { HTMLView } from "../htmlView.js";
import { div, span } from "../libs/html.js";
import { LOCALIZATION } from "../localization.js";


export class PlayView extends HTMLView {
    constructor(parentElement, controller) {
        super(parentElement, controller);
        this.className = 'play-view';
        this.container.className ='play-view-container';

        this.hudContainer = div(this.container, {className: 'play-view-hudContainer'});

        let col = div(this.hudContainer, {className: 'play-view-col'});

        span(col, {innerHTML: 'Clicks', className:'play-view-title'});

       this.clicks = span(col, {innerHTML: '1000', className:'play-view-clicks'});

       col = div(this.hudContainer, {className: 'play-view-col'});

       this.timeTitle = span(col, {innerHTML: 'Time', className:'play-view-title'});

       this.time = span(col, {innerHTML: '30', className:'play-view-time'});

       this.resetBtn = div(this.hudContainer, {className:'play-view-resetBtn', onclick: this.onReset.bind(this)});

       div(this.resetBtn, {className:'play-view-resetBtn-icon'});


       this.cardsContainer = div(this.container, { className:'play-view-cardsContainer'});




        this.show();
    }
        showCards(cards){

        }

        onReset (){

        }



    }



customElements.define("play-view", PlayView);
