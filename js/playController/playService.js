import { GOTO_EVENT_TYPE } from "../constants.js";
import { Service } from "../service.js";

export class PlayService extends Service{
    constructor(controller, onCompleted){
        super(controller, onCompleted);
        this.requestCards();
    }

    requestCards() { 
        let request = new XMLHttpRequest();
        request.open('GET', '../data/cards.json');
        request.onload = () => {
            let data = JSON.parse(request.response);
            this.onCompleted(data.cards);
        }

        request.send();

    }


}