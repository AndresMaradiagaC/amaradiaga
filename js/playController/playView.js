import { THEME_TYPE } from "../constants.js";
import { HTMLView } from "../htmlView.js";
import { div, span } from "../libs/html.js";
import { CardimageView } from "./cardimageView.js";
import { CardView } from "./cardView.js";


export class PlayView extends HTMLView {
    constructor(parentElement, controller) {
        super(parentElement, controller);
        this.className = 'play-view';
        this.container.className ='play-view-container';

        this.hudContainer = div(this.container, {className: 'play-view-hudContainer'});

        let col = div(this.hudContainer, {className: 'play-view-col'});

        span(col, {innerHTML: 'Clicks', className:'play-view-title'});

       this.clicks = span(col, {innerHTML: '0', className:'play-view-clicks'});

       col = div(this.hudContainer, {className: 'play-view-col'});

       this.timeTitle = span(col, {innerHTML: 'Time', className:'play-view-title'});

       this.time = span(col, {innerHTML: '0', className:'play-view-time'});

       this.resetBtn = div(this.hudContainer, {className:'play-view-resetBtn', onclick: this.onReset.bind(this)});

       div(this.resetBtn, {className:'play-view-resetBtn-icon'});

        let contentContainer = div(this.container, { className:'play-view-contentContainer'});
        
       this.cardsContainer = div(contentContainer, { className:'play-view-cardsContainer'});




        this.show();
    }
    showCards(cards) {
        this.cardsContainer.innerHTML= '';

        const theme = localStorage.getItem('theme');

        cards.forEach(card => {
            switch (theme) {
                case THEME_TYPE.FOOD:
                case THEME_TYPE.FACES:
                case THEME_TYPE.FLAGS:
                    new CardView(this.cardsContainer, this.controller, card);
                    break;
                case THEME_TYPE.PACMAN:
                    new CardimageView(this.cardsContainer, this.controller, card, theme);
                    break;
                case THEME_TYPE.MARIO:
                    new CardimageView(this.cardsContainer, this.controller, card, theme);
                    break;
                case THEME_TYPE.SONIC:
                    new CardimageView(this.cardsContainer, this.controller, card, theme);
                    break;
                default:
                    new CardView(this.cardsContainer, this.controller, card);
                    break;


            }
        });
        
    }


        onReset (){
            this.controller.restarGame();
        }

        updateHub(clicksCounter, timeCounter) {
            this.clicks.innerHTML = `${clicksCounter}`;
            this.time.innerHTML = `${timeCounter}`;
        }
        


    }



customElements.define("play-view", PlayView);
