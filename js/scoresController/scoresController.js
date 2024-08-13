import { Controller } from "../controller.js";
import { LoadingService } from "./loadingService.js";
import {LoadingView } from "./loadingView.js";

export class LoadingController extends Controller{
    constructor(parentElement, appManager){
        super();
        this.appManager = appManager;
        this.view = new LoadingView(parentElement, this);
        this.service = new LoadingService(this);

    }
}