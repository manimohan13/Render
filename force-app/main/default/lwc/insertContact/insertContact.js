import { LightningElement } from 'lwc';
import insertContact from '@salesforce/apex/CreateContact.insertContact';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class InsertContact extends LightningElement {
    firstName;
    lastName;
    birthDate;
    email;
    department;

    handleChange(event) {
        const { name, value } = event.target;
        
        if (name === 'firstName') {
            this.firstName = value;
        } else if (name === 'lastName') {
            this.lastName = value;
        } else if (name === 'birthDate') {
            this.birthDate = value;
        } else if (name === 'email') {
            this.email = value;
        } else if (name === 'department') {
            this.department = value;
        }
    }

    handleCreateClick() {
        insertContact({
            firstName: this.firstName,
            lastName: this.lastName,
            birthDate: this.birthDate,
            email: this.email,
            department: this.department
        })
        .then(result => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Record created successfully with ID: ' + result,
                    variant: 'success'
                })
            );
        })
        .catch(error => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error',
                    message: 'Error creating record: ' + error.body.message,
                    variant: 'error'
                })
            );
        });
    }
}
