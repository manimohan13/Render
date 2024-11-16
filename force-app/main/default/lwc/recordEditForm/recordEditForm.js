import { LightningElement } from 'lwc';
import OPP_OBJ from '@salesforce/schema/Opportunity';
import NAME_FIELD from  '@salesforce/schema/Opportunity.Name';
import AMOUNT_FIELD from  '@salesforce/schema/Opportunity.Amount';
import CLOSEDATE_FIELD from  '@salesforce/schema/Opportunity.CloseDate';
import EXPECTEDREVENUE_FIELD from  '@salesforce/schema/Opportunity.ExpectedRevenue';
import STAGENAME_FIELD from  '@salesforce/schema/Opportunity.StageName';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class RecordEditForm extends LightningElement {
    objectApiName=OPP_OBJ;
    name=NAME_FIELD;
    amount=AMOUNT_FIELD;
    closeDate=CLOSEDATE_FIELD;
    expectedRevenue=EXPECTEDREVENUE_FIELD;
    stageName=STAGENAME_FIELD;

    handlerSuccess(event)
    {
       //console.log('inside Success handler') 
       const evt= new ShowToastEvent({
        title:"Opportunity",
         message: "Opportunity Updated " + event.detail.id,
        variant: "success"
     })
     this.dispatchEvent(evt);
    }

    handlerSubmit(event)
    {
        event.preventDefault(); // It will stop default behaviour of submit
        //console.log('inside Submit handler')
        //custom validation
        //annual revenue should not be less than 100
        //1. get the input 2. check its valid   3. submit data to server
    const inputRevenue = this.template.querySelector(".revenue")
    console.log(inputRevenue.value)
    if(inputRevenue.value<100)
    {
        const evt= new ShowToastEvent({
            title:"Opportunity",
             message:"Annual Revenue can not less than 100  " + event.detail.id,
            variant:"error"
         })
         this.dispatchEvent(evt);
    }
    else
    {
        const fields =event.detail.fields;
        this.template.querySelector("lightning-record-edit-form").submit(fields)
    
    }
    }

    handlererror(event)
    {
        const evt= new ShowToastEvent({
            title:"Opportunity",
             message:"Error Creating on Opportunity " + event.detail.message,
            variant:"error"
         })
         this.dispatchEvent(evt);
    }
}