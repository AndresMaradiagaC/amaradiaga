import { HTMLView } from "../htmlView.js";
import { div } from "../libs/html.js";
import { GOTO_EVENT_TYPE } from "../constants.js";
import { LOCALIZATION } from "../localization.js";


export class MenuView extends HTMLView {
    constructor(parentElement, controller) {
        super(parentElement, controller);
        this.className = 'menu-view';


        this.container.className = 'menu-view-container';

        this.loginBtn = div(this.container, { className: 'button', innerHTML: LOCALIZATION.login(), onclick: this.changeScreen.bind(this, GOTO_EVENT_TYPE.LOGIN) });

        // this.appendChild(this.container);
        // Esto no hace falta aqui porque en la linea 13 al invocar div(this, ....) ya se esta pasando el parent element, que es this, al elemento que se va a creat en la funcion div.


        this.playBtn = div(this.container, { className: 'button', innerHTML: LOCALIZATION.play, onclick: this.changeScreen.bind(this, GOTO_EVENT_TYPE.PLAY) });
        this.scoresBtn = div(this.container, { className: 'button', innerHTML: LOCALIZATION.scores, onclick: this.changeScreen.bind(this, GOTO_EVENT_TYPE.SCORES) });
        this.difficultyBtn = div(this.container, { className: 'button', innerHTML: LOCALIZATION.difficulty, onclick: this.changeScreen.bind(this, GOTO_EVENT_TYPE.DIFFICULTY) });
        this.themesBtn = div(this.container, { className: 'button', innerHTML: LOCALIZATION.theme, onclick: this.changeScreen.bind(this, GOTO_EVENT_TYPE.THEMES) });
        this.creditsBtn = div(this.container, { className: 'button', innerHTML: LOCALIZATION.credits, onclick: this.changeScreen.bind(this, GOTO_EVENT_TYPE.CREDITS) });
        this.localizationBtn = div(this.container, { className: 'button', innerHTML: LOCALIZATION.language, onclick: this.changeScreen.bind(this, GOTO_EVENT_TYPE.LOCALIZATION) });


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
    updateLanguage (){
        this.loginBtn.innerHTML = LOCALIZATION.login();
    }

}

customElements.define("menu-view", MenuView);
