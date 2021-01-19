import { ModelParticipants } from "./ModelParticipants.js";
import { ViewParticipants } from "./ViewParticipants.js";

export class ControllerParticipants{
    constructor(){
        this.model = new ModelParticipants();
        
        this.view = new ViewParticipants(
            this.handleFilter
            );
        this.loadData();
    }
    loadData(){
        this.model.loadArticles()
            .then(data => {
                this.view.renderArticles(data);
            });
    }
}