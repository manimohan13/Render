import { LightningElement } from 'lwc';
import OPP_OBJ from '@salesforce/schema/Opportunity';
import NAME_FIELD from  '@salesforce/schema/Opportunity.Name';
import AMOUNT_FIELD from  '@salesforce/schema/Opportunity.Amount';
import CLOSEDATE_FIELD from  '@salesforce/schema/Opportunity.CloseDate';
import EXPECTEDREVENUE_FIELD from  '@salesforce/schema/Opportunity.ExpectedRevenue';
import STAGENAME_FIELD from  '@salesforce/schema/Opportunity.StageName';

export default class RecordViewFormDemo extends LightningElement {
    objectApiName=OPP_OBJ;
    name=NAME_FIELD;
    amount=AMOUNT_FIELD;
    closeDate=CLOSEDATE_FIELD;
    expectedRevenue=EXPECTEDREVENUE_FIELD;
    stageName=STAGENAME_FIELD;

}