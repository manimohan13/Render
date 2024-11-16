import { LightningElement } from 'lwc';

export default class LoginOption extends LightningElement {
    // Track checkboxes and input validity
    isMembersLoginChosen = false;
    isNewMemberSigninChosen = false;
    showInvalidPasswordMessage = false;
    showIncompleteRegistrationMessage = false;
    enteredPassword = '';
    enteredName = '';
    enteredEmail = '';

    // Handle checkbox changes
    handleMembersLoginChange(event) {
        this.isMembersLoginChosen = event.target.checked;
        this.isNewMemberSigninChosen = false;
        this.template.querySelector(".newMemberSignin").checked=false;
    }

    handleNewMembersSigninChange(event) {
        this.isNewMemberSigninChosen = event.target.checked;
        this.isMembersLoginChosen = false;
        this.template.querySelector(".membersLogin").checked=false;
    }

    // Handle password input change
    handlePasswordChange(event) {
        this.enteredPassword = event.target.value;
    }

    // Validate login on button click
    handleLogin() {
        if (this.enteredPassword !== 'validPassword') {
            this.showInvalidPasswordMessage = true;
        } else {
            this.showInvalidPasswordMessage = false;
            alert('Welcome!');
        }
    }

    // Handle name and email input change
    handleNameChange(event) {
        this.enteredName = event.target.value;
    }

    handleEmailChange(event) {
        this.enteredEmail = event.target.value;
    }

    // Validate registration on button click
    handleRegistration() {
        if (this.enteredName && this.enteredEmail) {
            this.showIncompleteRegistrationMessage = false;
            alert('Registration Successful!');
        } else {
            this.showIncompleteRegistrationMessage = true;
        }
    }
}
