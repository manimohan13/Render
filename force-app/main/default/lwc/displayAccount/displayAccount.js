import { LightningElement, track } from 'lwc';
import displayAccountList from '@salesforce/apex/AccountControllerSearch.displayAccountList';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class DisplayAccount extends LightningElement {
    @track accountsList; // List of accounts retrieved from Apex
    @track name = ''; // Search input
    @track error; // Error message
    @track columns = [ // Define columns for the datatable
        { label: 'Id', fieldName: 'Id', type: 'text' },
        { label: 'Name', fieldName: 'Name', type: 'text' },
        { label: 'Account Number', fieldName: 'AccountNumber', type: 'text' },
        { label: 'Billing State', fieldName: 'BillingState', type: 'text' },
    ];

    handleChange(event) {
        this.name = event.target.value; // Update search input
    }

    handleClick() {
        displayAccountList({ Name: this.name })
            .then(response => {
                this.accountsList = response; // Set the response data to accountsList
                this.error = undefined; // Clear any previous error
            })
            .catch(error => {
                this.error = error.body.message || 'Unknown error'; // Capture error
                this.accountsList = undefined; // Clear accountsList on error
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error',
                        message: this.error,
                        variant: 'error'
                    })
                );
            });
    }
}
