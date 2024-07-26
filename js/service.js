export class Service {
    onCompleted;
    controller;
    constructor(controller, onCompleted){
        this.controller = controller;
        this.onCompleted = onCompleted;
    }

    fetch(){
        
    }
}