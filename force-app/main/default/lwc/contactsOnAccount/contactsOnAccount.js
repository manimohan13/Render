import { LightningElement,wire } from 'lwc';
import getAccountList from '@salesforce/apex/contactListOnAccount.getAccountList'

export default class ContactsOnAccount extends LightningElement {
    
accountList;

@wire(getAccountList,{})
accountsHandler({data,error})
{
    if(data)
    {
        this.accountList=data;
    }
    
}
}