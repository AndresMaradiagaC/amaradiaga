import { Controller } from "../controller.js";
import { PlayService } from "./playService.js";
import { PlayView } from "./playView.js";

export class PlayController extends Controller {
    constructor(parentElement, appManager) {
        super();
        this.appManager = appManager;
        this.view = new PlayView(parentElement, this);
        this.service = new PlayService(this, this.onCompletedGettingCards.bind(this));

        this.cards = null;
        this.cardView1 = null;
        this.cardView2 = null;
        this.showCardsTimer = null;

        this.view.addEventListener('on-card-click', (event) => {
            console.log(event);
            this.onCardSelection(event.detail.card);
        });
    }

    onCardSelection(cardView) {
        if (this.cardView1 !== null && this.cardView2 !== null) return;

        if (this.cardView1 === null) {
            this.cardView1 = cardView;
            this.cardView1.showSelected();
        } else if (this.cardView2 === null) {
            this.cardView2 = cardView;
            this.cardView2.showSelected();

            if (this.isCardPairMatching()) {
                this.cardView1.card.isDiscovered = true;
                this.cardView2.card.isDiscovered = true;
                this.cardView1.showDiscovered();
                this.cardView2.showDiscovered();
                this.cardView1 = null;
                this.cardView2 = null;
                if (this.isGameComplete()) {
                    console.log('GAME COMPLETED');
                }
            } else {
                this.showCardsTimer = setTimeout(() => {
                    this.cardView1.hideSelected();
                    this.cardView2.hideSelected();
                    this.cardView1 = null;
                    this.cardView2 = null;
                    console.log('cards are not matching');
                    clearTimeout(this.showCardsTimer);
                    this.showCardsTimer = null;
                }, 500);
            }
        }
    }

    isCardPairMatching() {
        return this.cardView1.card.id === this.cardView2.card.id;
    }

    isGameComplete() {
        for (let i = 0; i < this.cards.length; i++) {
            const card = this.cards[i];
            if (!card.isDiscovered) {
                return false;
            }
        }
        return true;
    }

    onCompletedGettingCards(cards) {
        this.cards = cards;
        this.view.showCards(cards);
    }
}
