import { LightningElement,wire,api } from 'lwc';
import getAccountWithContacts from '@salesforce/apex/AccountController.getAccountWithContacts';
export default class RelatedContactsOnAccount extends LightningElement {
    @api recordId; // Get the Account ID from the record page
    account;
    error;

    @wire(getAccountWithContacts, { accountId: '$recordId' }) // Pass the Account ID to Apex
    accountHandler({ data, error }) {
        if (data) {
            this.account = data;
        } else if (error) {
            this.error = error;
        }
    }
}