import { LightningElement, wire } from 'lwc';
import OPP_OBJ from '@salesforce/schema/Opportunity';
import NAME_FIELD from  '@salesforce/schema/Opportunity.Name';
import AMOUNT_FIELD from  '@salesforce/schema/Opportunity.Amount';
import CLOSEDATE_FIELD from  '@salesforce/schema/Opportunity.CloseDate';
import EXPECTEDREVENUE_FIELD from  '@salesforce/schema/Opportunity.ExpectedRevenue';
import STAGENAME_FIELD from  '@salesforce/schema/Opportunity.StageName';

import {getRecord} from 'lightning/uiRecordApi';

import Id from '@salesforce/user/Id';



export default class WireAdopterFunction extends LightningElement {
opportunityData;
userId=Id;
userData;
    constructor(){
        super();
        console.log('constructor called');
    }
   
   
    //@wire(getRecord,{recordId:'006IR00001U46AZYAZ',fields:['Opportunity.Name','Opportunity.Amount']})
//@wire(getRecord,{recordId:'006IR00001U46AZYAZ',layoutTypes:'Full'})
    @wire(getRecord,{recordId:'$userId',fields:['User.Name','User.Email']})//instead of using this.userId use $userId sothat it will be a reactive
    getUserRecord({data,error})
    //getOpportunityRecord(data,error) // either using function or using property // for using data, error(dedtructuring) instead of response it will show either data or error
    
    
    
    
    
    
    
    {
        if(data)
            {
                
                console.log(data); 
                this.userData=data.fields;
            }
            if(error)
            {
                console.log(error.message);
            }





        /*
        console.log('wire method called');

        if(data)
        {
            console.log('UserId' +this.userId);
            console.log(data);
                
            
            this.opportunityData=data.fields;
        }
        if(error)
        {
            console.log(error.message);
        }
            */
        /*
        if(response.data)
        {
            console.log(response);
            console.log(response.data);
           
            console.log(response.data.fields.Name.value);
            this.opportunityData=response.data.fields;
        }
            */
        
    }

    connectedCallback()
    {
        console.log('connectedcallback called');
        /*
        const person={name:'ABC', age:18, city:'Delhi'}
        const name=person.name;
        const age=person.age;

        const {name,age}=person
        */
    }
    
//object destructuring
}