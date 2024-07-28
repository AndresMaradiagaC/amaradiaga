import { THEME_TYPE } from "../constants.js";
import { HTMLView } from "../htmlView.js";
import { div, input, span } from "../libs/html.js";
import { LOCALIZATION } from "../localization.js";


export class LoginView extends HTMLView {
    constructor(parentElement, controller) {
        super(parentElement, controller);
        this.className = 'login-view';


        this.container.className ='login-view-container';
        this.title = div(this.container, {className:'login-view-title', innerHTML: 'Add you name to save your scores'})
        this.usernameInput = input(this.container, {placeholder: 'User name', className: 'login-view-input'});

        this.loginBtn = div(this.container, { className: 'button', innerHTML: LOCALIZATION.login(), onclick: this.changeTheme.bind(this, THEME_TYPE.FOOD) });
        this.show();






    }

    changeTheme(themeType) {

    }
}

customElements.define("login-view", LoginView);
