import { Controller } from "../controller.js";
import { PlayService } from "./playService.js";
import {PlayView } from "./playView.js";

export class PlayController extends Controller {
    constructor(parentElement, appManager) {
        super();
        this.appManager = appManager;
        this.view = new PlayView(parentElement, this);
        this.service = new PlayService(this, this.onCompletedGettingCards.bind(this));
    }

    onCompletedGettingCards(cards) {
        this.view.showCards(cards);
    }
}