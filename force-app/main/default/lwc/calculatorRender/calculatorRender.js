// calculatorApp.js
import { LightningElement } from 'lwc';
import basicTemplate from './calculator.html';
import scientificTemplate from './scientificCalculator.html';
import calculatorRender from './calculatorRender.html';

export default class CalculatorApp extends LightningElement {
    chosenTemplate = null;
    result = '';

    render() {
        return this.chosenTemplate === 'Basic' ? basicTemplate :
               this.chosenTemplate === 'Scientific' ? scientificTemplate :
               calculatorRender;
    }

    handleBasicCalculatorClick() {
        this.chosenTemplate = 'Basic';
        this.result = ''; // Reset on switching
    }

    handleScientificCalculatorClick() {
        this.chosenTemplate = 'Scientific';
        this.result = ''; // Reset on switching
    }

    handleButtonClick(event) {
        const value = event.target.label;
        this.result += value;
    }

    handleCalculate() {
        try {
            this.result = eval(this.result);
        } catch (error) {
            this.result = 'Error';
        }
    }

    handleClear() {
        this.result = '';
    }

    handleBackspace() {
        this.result = this.result.slice(0, -1);
    }

    handleSquare() {
        this.result = Math.pow(parseFloat(this.result), 2);
    }

    handleSqrt() {
        this.result = Math.sqrt(parseFloat(this.result));
    }

    handleSin() {
        this.result = Math.sin(this.toRadians(parseFloat(this.result)));
    }

    handleCos() {
        this.result = Math.cos(this.toRadians(parseFloat(this.result)));
    }

    handleTan() {
        this.result = Math.tan(this.toRadians(parseFloat(this.result)));
    }

    handleLog() {
        this.result = Math.log10(parseFloat(this.result));
    }

    handleCbrt() {
        this.result = Math.cbrt(parseFloat(this.result));
    }

    handleClose() {
        this.chosenTemplate = null;
        this.result = '';
    }

    toRadians(value) {
        return (value * Math.PI) / 180;
    }
}
