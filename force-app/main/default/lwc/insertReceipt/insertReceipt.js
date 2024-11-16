// insertReceipt.js
import { LightningElement, track, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class InsertReceipt extends LightningElement {
    @track showButton = false;
    @api recordId; // Automatically set when component is on a record page
    
    // Alias contactId to recordId for clarity
    get contactId() {
        console.log('Parent Component - contactId:', this.recordId);
        return this.recordId;
    }

    handleCreateClick() {
        if (!this.contactId) {
            // Inform the user that contactId is missing
            const toastEvent = new ShowToastEvent({
                title: 'Error',
                message: 'Unable to determine Contact ID.',
                variant: 'error',
            });
            this.dispatchEvent(toastEvent);
            return;
        }
        this.showButton = true;
    }

    handleCloseChild() {
        this.showButton = false;
    }
}
