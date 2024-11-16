import { LightningElement } from 'lwc';

export default class CheckPalindrome extends LightningElement {
    resultMessage = '';
    computedClass = ''; // Default SLDS classes

    handleClick(event) {
        const inputText = this.template.querySelector('[data-id="inputBox"]').value;
       // const inputText = event.target.value;
        

        const cleanedText = inputText.replace(/[^A-Za-z0-9]/g, '').toLowerCase(); // Remove non-alphanumeric characters
        const reversedText = cleanedText.split('').reverse().join('');

        if (cleanedText && cleanedText === reversedText) {
            // Palindrome case
            this.resultMessage = `"${inputText}" is a palindrome.`;
            this.computedClass = 'slds-box slds-p-around_medium slds-theme_success'; // Green background
        } else {
            // Not a palindrome case
            this.resultMessage = `"${inputText}" is not a palindrome.`;
            this.computedClass = 'slds-box slds-p-around_medium slds-theme_error'; // Red background
        }
    }
}
