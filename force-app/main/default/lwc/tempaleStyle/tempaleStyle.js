import { LightningElement } from 'lwc';

export default class TemplateStyle extends LightningElement {
    displayText = ''; // Initialize displayText

    // Handle input change
    handleChange(event) {
        this.displayText = event.target.value;
    }

   
    handleTemp1Click() {
        const displayTextElement = this.template.querySelector('[data-id="displayText"]');
        if (displayTextElement) {
            displayTextElement.style.fontStyle = 'italic';
            displayTextElement.style.fontWeight = 'bold';
            displayTextElement.style.fontSize = '20px';
            displayTextElement.style.fontFamily = 'Arial';
            displayTextElement.style.color = 'red';
            displayTextElement.style.backgroundColor = 'yellow';
            displayTextElement.style.textAlign = 'center';
        }
    }

    
    handleTemp2Click() {
        const displayTextElement = this.template.querySelector('[data-id="displayText"]');
        if (displayTextElement) {
            displayTextElement.style.color = 'blue';
            displayTextElement.style.fontFamily = 'sans-serif';
            displayTextElement.style.fontSize = '20px';
            displayTextElement.style.fontWeight = 'bold';
            displayTextElement.style.fontStyle = 'normal';
            displayTextElement.style.textAlign = 'center';
        }
    }

    
    handleTemp3Click() {
        const displayTextElement = this.template.querySelector('[data-id="displayText"]');
        if (displayTextElement) {
            displayTextElement.style.color = 'pink';
            displayTextElement.style.fontFamily = 'Helvetica';
            displayTextElement.style.fontSize = '30px';
            displayTextElement.style.fontWeight = 'bold';
            displayTextElement.style.textAlign = 'center';
        }
    }
}
