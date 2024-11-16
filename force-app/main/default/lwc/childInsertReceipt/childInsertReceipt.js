// childInsertReceipt.js
import { LightningElement, api, track } from 'lwc';
import insertReciptRecord from '@salesforce/apex/InsertReceipt.insertReciptRecord'; // Ensure correct Apex method name
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ChildInsertReceipt extends LightningElement {
    @track amount;
    @track amountPaidDate;
    @track modeOfPay;
    
    @api contactId; // Contact ID passed from parent component

    // Options for Mode of Pay picklist: Online and Offline
    paymentModeOptions = [
        { label: 'Online', value: 'Online' },
        { label: 'Offline', value: 'Offline' }
    ];

    // connectedCallback() {
    //     console.log('Child Component - contactId:', this.contactId);
    // }

    // Handles changes in the Mode of Pay picklist
    handlePaymentModeChange(event) {
        this.modeOfPay = event.detail.value;
        console.log('Mode of Pay selected:', this.modeOfPay); // Debugging log
    }

    // Handles changes in the Amount input
    handleAmountChange(event) {
        this.amount = event.target.value;
        console.log('Amount entered:', this.amount); // Debugging log
    }

    // Handles changes in the Amount Paid Date input
    handleAmountPaidDateChange(event) {
        this.amountPaidDate = event.target.value;
        console.log('Amount Paid Date entered:', this.amountPaidDate); // Debugging log
    }

    // Handle Save button click
    handleSaveClick() {
        // Log values to ensure they are being set correctly
        console.log('Saving Receipt with Amount:', this.amount, 'Date:', this.amountPaidDate, 'Mode:', this.modeOfPay, 'ContactId:', this.contactId);

        // Check if fields are empty or invalid
        if (!this.amount || !this.amountPaidDate || !this.modeOfPay || !this.contactId) {
            this.showToast('Error', 'All fields are required.', 'error');
            return;
        }

        // Call the Apex method to insert the receipt record
        insertReciptRecord({
            amount: parseFloat(this.amount), // Ensure amount is a number
            amountPaidDate: this.amountPaidDate,
            modeOfPay: this.modeOfPay,
            contactId: this.contactId // Pass the contactId to the Apex method
        })
        .then(result => {
            // Show success message and close the modal
            this.showToast('Success', 'Receipt created successfully', 'success');
            this.dispatchEvent(new CustomEvent('close')); // Dispatch close event to parent component
        })
        .catch(error => {
            // Show error message
            this.showToast('Error', error.body.message, 'error');
            console.error('Error inserting receipt:', error); // Log error for debugging
        });
    }

    // Show toast notification
    showToast(title, message, variant) {
        const toastEvent = new ShowToastEvent({
            title,
            message,
            variant
        });
        this.dispatchEvent(toastEvent);
    }

    // Handle Close button click
    handleCloseClick() {
        this.dispatchEvent(new CustomEvent('close'));
    }
}
  