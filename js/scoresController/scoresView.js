import { DIFFICULTY_TYPE } from "../constants.js";
import { HTMLView } from "../htmlView.js";
import { div, span } from "../libs/html.js";
import { LOCALIZATION } from "../localization.js";
import { ScoreView } from "./scoreView.js";


export class ScoresView extends HTMLView {
    constructor(parentElement, controller) {
        super(parentElement, controller);
        this.className = 'scores-view';
        this.container.className ='scores-view-container';




        this.show();
    }

        showScores(scores){
        console.log(scores);
        scores.forEach(score => {
            const scoreView = new ScoreView(this.container, score);
            
        });


    }

}

customElements.define("scores-view", ScoresView);
