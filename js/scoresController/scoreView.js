import { DIFFICULTY_TYPE } from "../constants.js";
import { HTMLView } from "../htmlView.js";
import { div, span } from "../libs/html.js";
import { LOCALIZATION } from "../localization.js";


export class ScoreView extends HTMLView {
    constructor(parentElement, score) {
        super(parentElement, null);
        this.score = score;
        this.className = 'score-view';

        this.innerHTML = '';

        const row1 = div(this, { className: 'score-view-row1' });
        const row2 = div(this, { className: 'score-view-row2' });

        span(row1, { innerHTML: this.score.username, className: 'score-view-title' });

        const col1 = div(row2, { className: 'score-view--col' });
        const col2 = div(row2, { className: 'score-view--col' });
        const col3 = div(row2, { className: 'score-view--col' });

        span(col1, { className: 'score-view-name', innerHTML: 'SCORE' });
        span(col1, { className: 'score-view-value', innerHTML: this.score.score });

        span(col2, { className: 'score-view-name', innerHTML: 'CLICKS' });
        span(col2, { className: 'score-view-value', innerHTML: this.score.clicks });

        span(col3, { className: 'score-view-name', innerHTML: 'TIME' });
        span(col3, { className: 'score-view-value', innerHTML: this.score.time });

        // this.show();
    }
}


customElements.define("score-view", ScoreView);
