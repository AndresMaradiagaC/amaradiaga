import { HTMLView } from "../htmlView.js";
import { div } from "../libs/html.js";
import { GOTO_EVENT_TYPE } from "../constants.js";


export class MenuView extends HTMLView {
    constructor(parentElement, controller) {
        super(parentElement, controller);
        this.className = 'menu-view';

        this.fade = div(this, { className: 'fade' });

        this.container = div(this, { className: 'menu-view-container' });

        this.loginBtn = div(this.container, { className: 'button', innerHTML: 'Login', onclick: this.changeScreen.bind(this, GOTO_EVENT_TYPE.LOGIN) });

        // this.appendChild(this.container);
        // Esto no hace falta aqui porque en la linea 13 al invocar div(this, ....) ya se esta pasando el parent element, que es this, al elemento que se va a creat en la funcion div.


        this.playBtn = div(this.container, { className: 'button', innerHTML: 'Play', onclick: this.changeScreen.bind(this, GOTO_EVENT_TYPE.PLAY) });
        this.scoresBtn = div(this.container, { className: 'button', innerHTML: 'Scores', onclick: this.changeScreen.bind(this, GOTO_EVENT_TYPE.SCORES) });
        this.difficultyBtn = div(this.container, { className: 'button', innerHTML: 'Difficulty', onclick: this.changeScreen.bind(this, GOTO_EVENT_TYPE.DIFFICULTY) });
        this.themesBtn = div(this.container, { className: 'button', innerHTML: 'Themes', onclick: this.changeScreen.bind(this, GOTO_EVENT_TYPE.THEMES) });
        this.creditsBtn = div(this.container, { className: 'button', innerHTML: 'Credits', onclick: this.changeScreen.bind(this, GOTO_EVENT_TYPE.CREDITS) });


    }

    changeScreen(eventType) {
        const event = new CustomEvent('goto', {
            detail: {
                eventType: eventType
            },
            bubbles: true
        });
        this.dispatchEvent(event);
    }
}

customElements.define("menu-view", MenuView);
