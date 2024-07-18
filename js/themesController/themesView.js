import { THEME_TYPE } from "../constants.js";
import { HTMLView } from "../htmlView.js";
import { div } from "../libs/html.js";
import { LOCALIZATION } from "../localization.js";


export class ThemesView extends HTMLView {
    constructor(parentElement, controller) {
        super(parentElement, controller);
        this.className = 'themes-view';


        this.container.className ='themes-view-container';

        // this.appendChild(this.container); 
        //Esto no hace falta aqui porque en la linea 13 al invocar div(this, ....) ya se esta pasando el parent element, que es this, al elemento que se va a creat en la funcion div.

        this.foodBtn = div(this.container, { className: 'button', innerHTML: LOCALIZATION.food, onclick: this.changeTheme.bind(this, THEME_TYPE.FOOD) });

        this.facesBtn = div(this.container, { className: 'button', innerHTML: LOCALIZATION.faces, onclick: this.changeTheme.bind(this, THEME_TYPE.FACES) });

        this.flagsBtn = div(this.container, { className: 'button', innerHTML: LOCALIZATION.flags, onclick: this.changeTheme.bind(this, THEME_TYPE.fLAGS) });
        this.show();




    }

    changeTheme(themeType) {

    }
}

customElements.define("themes-view", ThemesView);
