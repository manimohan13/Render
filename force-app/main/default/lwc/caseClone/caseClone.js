import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import cloneCase from '@salesforce/apex/CaseCloneController.cloneCase';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

// List of fields to query on the Case object
const CASE_FIELDS = ['Case.Subject', 'Case.Status', 'Case.Description'];

export default class CaseCloneButton extends LightningElement {
    
    @api recordId; // ID of the current Case record
    clonedCaseId; // ID of the cloned Case
    error;

    // Fetch the current case record using wire adapter
    @wire(getRecord, { recordId: '$recordId', fields: CASE_FIELDS })
    case;

    // Method to handle the clone button click
    handleClone() {
        cloneCase({ caseId: this.recordId })
            .then(result => {
                this.clonedCaseId = result.Id;
                this.error = undefined;

                // Show a success toast message
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Case cloned successfully!',
                        variant: 'success'
                    })
                );
            })
            .catch(error => {
                this.error = error.body.message;
                this.clonedCaseId = undefined;

                // Show an error toast message
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error cloning case',
                        message: error.body.message,
                        variant: 'error'
                    })
                );
            });
    }
}
