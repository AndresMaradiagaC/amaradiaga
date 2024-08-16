import { THEME_TYPE } from "../constants.js";
import { HTMLView } from "../htmlView.js";
import { div } from "../libs/html.js";
import { LOCALIZATION } from "../localization.js";


export class ThemesView extends HTMLView {
    constructor(parentElement, controller) {
        super(parentElement, controller);
        this.className = 'themes-view';


        this.container.className ='themes-view-container';


        this.pacmanBtn = div(this.container, { className: 'button', innerHTML: LOCALIZATION.pacman(), onclick: this.changeTheme.bind(this, THEME_TYPE.PACMAN) });

        this.marioBtn = div(this.container, { className: 'button', innerHTML: LOCALIZATION.mario(), onclick: this.changeTheme.bind(this, THEME_TYPE.MARIO) });

        this.sonicBtn = div(this.container, { className: 'button', innerHTML: LOCALIZATION.sonic(), onclick: this.changeTheme.bind(this, THEME_TYPE.SONIC) });

        this.foodBtn = div(this.container, { className: 'button', innerHTML: LOCALIZATION.food(), onclick: this.changeTheme.bind(this, THEME_TYPE.FOOD) });

        this.facesBtn = div(this.container, { className: 'button', innerHTML: LOCALIZATION.faces(), onclick: this.changeTheme.bind(this, THEME_TYPE.FACES) });

        this.flagsBtn = div(this.container, { className: 'button', innerHTML: LOCALIZATION.flags(), onclick: this.changeTheme.bind(this, THEME_TYPE.FLAGS) });



        this.show();




    }

    changeTheme(themeType) {

        const event = new CustomEvent('change-theme', {
            detail: {
                theme: themeType
            },
            bubbles: true
        });

        this.dispatchEvent(event);

    }
}

customElements.define("themes-view", ThemesView);
