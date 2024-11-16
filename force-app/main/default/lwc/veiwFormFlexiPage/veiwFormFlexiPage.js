import { LightningElement,api } from 'lwc';
import NAME_FIELD from  '@salesforce/schema/Opportunity.Name';
import AMOUNT_FIELD from  '@salesforce/schema/Opportunity.Amount';
import CLOSEDATE_FIELD from  '@salesforce/schema/Opportunity.CloseDate';
import EXPECTEDREVENUE_FIELD from  '@salesforce/schema/Opportunity.ExpectedRevenue';
import STAGENAME_FIELD from  '@salesforce/schema/Opportunity.StageName';

export default class VeiwFormFlexiPage extends LightningElement {
    @api objectApiName;
    @api recordId;
    @api name=NAME_FIELD;
    @api amount=AMOUNT_FIELD;
    @api closeDate=CLOSEDATE_FIELD;
    @api expectedRevenue=EXPECTEDREVENUE_FIELD;
    @api stageName=STAGENAME_FIELD;
}