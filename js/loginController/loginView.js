import { THEME_TYPE } from "../constants.js";
import { HTMLView } from "../htmlView.js";
import { div, img, input, span } from "../libs/html.js";
import { LOCALIZATION } from "../localization.js";


export class LoginView extends HTMLView {
    constructor(parentElement, controller) {
        super(parentElement, controller);
        this.className = 'login-view';


        this.container.className ='login-view-container';
        this.title = div(this.container, {className:'login-view-title', innerHTML: 'Add you name to save your scores'})

        this.bodyImage = img(this.container, {src: './imagenes/control.png', className: 'body-image-class'});
        
    
        this.usernameInput = input(this.container, {placeholder: 'User name', className: 'login-view-input'});

        this.loginBtn = div(this.container, { className: 'button', innerHTML: LOCALIZATION.login(), onclick: this.onLoginBtn.bind(this) });
        this.show();






    }

    onLoginBtn() {
        if(this.usernameInput.value !== ''){

        let username = this.usernameInput.value;
        const event = new CustomEvent('Save-username', {
            detail: {
                username: username
            },
            bubbles: true
        });
        this.dispatchEvent(event);
        }
    }
}

customElements.define("login-view", LoginView);
