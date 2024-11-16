import { LightningElement,api } from 'lwc';

export default class ChildComponent extends LightningElement {
    //@api message; //Using @api - message will be convert into public property
    //Naming Convention
    @api messageDetails;
}