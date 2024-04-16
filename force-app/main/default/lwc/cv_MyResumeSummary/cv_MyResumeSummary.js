import { LightningElement, api } from 'lwc';

export default class Cv_MyResumeSummary extends LightningElement {
    @api details

    renderedCallback(){
        this.template.querySelector('.manualContent').innerHTML = this.details.DESCRIPTION;
    }
}