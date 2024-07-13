import { DIFFICULTY_TYPE} from "../constants.js";
import { HTMLView } from "../htmlView.js";
import { div } from "../libs/html.js";


export class DifficultyView extends HTMLView {
    constructor(parentElement, controller) {
        super(parentElement, controller);
        this.className = 'difficulty-view';

        this.fade = div(this, { className: 'fade'});

        this.container = div(this, { className: 'difficulty-view-container' });

        this.lownBtn = div(this.container, { className: 'button', innerHTML: 'Low', onclick: this.changeScreen.bind(this, DIFFICULTY_TYPE.LOW) });

        this.medBtn = div(this.container, { className: 'button', innerHTML: 'Medium', onclick: this.changeScreen.bind(this, DIFFICULTY_TYPE.MED) });

        this.highBtn = div(this.container, { className: 'button', innerHTML: 'High', onclick: this.changeScreen.bind(this, DIFFICULTY_TYPE.HIGH) });




    }

    changeScreen(difficulty){
        const event = new CustomEvent('change-difficulty', { 
            detail: {
                difficulty: difficulty
            },
            bubbles: true
        });
        this.dispatchEvent(event);
    }
}

customElements.define("difficulty-view", DifficultyView);
