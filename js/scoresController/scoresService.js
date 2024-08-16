import { GOTO_EVENT_TYPE } from "../constants.js";
import { Service } from "../service.js";

export class ScoresService extends Service {
    constructor(controller, onCompleted) {
        super(controller, onCompleted);
        this.fetch();
    }

    fetch() {
         let url = `https://amaradiaga-memory-game-be.vercel.app/scores`;
        //const url = `http://localhost:3000/scores`;

        const request = new XMLHttpRequest();
        request.open('GET', url);

        request.onload = () => {
            const scoresData = JSON.parse(request.responseText);
            const scores = [];

            for (const scoreKey in scoresData) {
                if (Object.prototype.hasOwnProperty.call(scoresData, scoreKey)) {
                    const score = scoresData[scoreKey];
                    scores.push(score);
                }
            }

            this.onCompleted(scores);
        };

        request.send();
    }
}
