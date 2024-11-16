import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import CASE_OBJ from '@salesforce/schema/Case'; //created a reference for the object
export default class CaseRecordForm extends LightningElement {
     objectApiName=CASE_OBJ;

handleSuccess(event)
 {
console.log(event.detail);
     const evt= new ShowToastEvent({
    title:"Case",
     message:"Case Updated " + event.detail.id,
    variant:"success"
 })
 this.dispatchEvent(evt);
 }
 handleError(event)
 {
    const evt= new ShowToastEvent({
        title:"Case",
         message:"Error Creating on Case " + event.detail.id,
        variant:"error"
     })
     this.dispatchEvent(evt);
 }
 
}