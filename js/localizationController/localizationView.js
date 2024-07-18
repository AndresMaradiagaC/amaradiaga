import { LANGUAGE_TYPE } from "../constants.js";
import { HTMLView } from "../htmlView.js";
import { div } from "../libs/html.js";
import { LOCALIZATION } from "../localization.js";


export class LocalizationView extends HTMLView {
    constructor(parentElement, controller) {
        super(parentElement, controller);
        this.className = 'localization-view';


        this.container.className ='localization-view-container';

        // this.appendChild(this.container); 
        //Esto no hace falta aqui porque en la linea 13 al invocar div(this, ....) ya se esta pasando el parent element, que es this, al elemento que se va a creat en la funcion div.

        this.esBtn = div(this.container, { className: 'button', innerHTML: LOCALIZATION.spanish(), onclick: this.changeLanguage.bind(this, LANGUAGE_TYPE.ES) });

        this.enBtn = div(this.container, { className: 'button', innerHTML: LOCALIZATION.english(), onclick: this.changeLanguage.bind(this, LANGUAGE_TYPE.EN) });



    }

    changeLanguage(language) {
        localStorage.setItem('language', language)
        this.esBtn.innerHTML = LOCALIZATION.spanish();
        this.enBtn.innerHTML = LOCALIZATION.english();

    }
}

customElements.define("localization-view", LocalizationView);
