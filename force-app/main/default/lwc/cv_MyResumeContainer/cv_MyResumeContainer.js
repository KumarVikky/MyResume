import { LightningElement, track } from 'lwc';
import * as RESUME_DATA from './cv_MyResumeData'

export default class Cv_MyResumeContainer extends LightningElement {
    @track resumeData = RESUME_DATA;
}