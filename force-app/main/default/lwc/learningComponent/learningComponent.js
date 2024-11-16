import { LightningElement } from 'lwc';

export default class LearningComponent extends LightningElement {
    inputSymbol = '';
    resultMessage = '';

    handleInputChange(event) {
        // Get the input symbol from the input box
        this.inputSymbol = event.target.value;
    }

    handleClick() {
        // Call the function to get the meaning of the symbol
        this.resultMessage = this.getSymbolExplanation(this.inputSymbol);
    }

    getSymbolExplanation(symbol) {
        let explanation;
        switch (symbol) {
            case '%':
                explanation = "The '%' symbol is used as the modulus operator to get the remainder of division.";
                break;
            case '{}':
                explanation = "'{}' is used to define a block of code or an object literal in JavaScript.";
                break;
            case '[]':
                explanation = "'[]' is used to define an array or access array elements by index.";
                break;
            case '=>':
                explanation = "The '=>' symbol is used for defining arrow functions.";
                break;
            case '!':
                explanation = "'!' is the NOT operator, used to negate a boolean value.";
                break;
            case '===':
                explanation = "'===' is the strict equality operator, which compares both value and type.";
                break;
            case '==':
                explanation = "'==' is the loose equality operator, which compares value but ignores type.";
                break;
            case '||':
                explanation = "'||' is the logical OR operator, used to return true if any of the conditions are true.";
                break;
            case '&&':
                explanation = "'&&' is the logical AND operator, used to return true only if both conditions are true.";
                break;
            default:
                explanation = "Invalid symbol";
        }
        return explanation;
    }
}