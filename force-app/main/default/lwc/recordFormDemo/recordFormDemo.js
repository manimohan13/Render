import { LightningElement,api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
// import OPP_OBJ from '@salesforce/schema/Opportunity'; //created a reference for the object
// import NAME_FIELD from  '@salesforce/schema/Opportunity.Name';
// import AMOUNT_FIELD from  '@salesforce/schema/Opportunity.Amount';
// import CLOSEDATE_FIELD from  '@salesforce/schema/Opportunity.CloseDate';
// import EXPECTEDREVENUE_FIELD from  '@salesforce/schema/Opportunity.ExpectedRevenue';
// import STAGENAME_FIELD from  '@salesforce/schema/Opportunity.StageName';

export default class RecordFormDemo extends LightningElement {
    @api objectApiName;
    @api recordId;
//fields = [NAME_FIELD,AMOUNT_FIELD,CLOSEDATE_FIELD,EXPECTEDREVENUE_FIELD,STAGENAME_FIELD]; // create an array of strings

//handleSuccess(event)
// {
//     console.log(event.detail);
//     const evt= new ShowToastEvent({
//     title:"Opportunity",
//     message:"Opportunity Updated " + event.detail.id,
//     variant:"success"
//  })
//  this.dispatchEvent(evt);
// }

}